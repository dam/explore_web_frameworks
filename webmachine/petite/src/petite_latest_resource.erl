-module(petite_latest_resource).
-export([init/1,
	 to_html/2,
	 content_types_provided/2,
	 to_text/2,
	 to_json/2
]).

-include_lib("webmachine/include/webmachine.hrl").

%% API
init([]) ->
    {ok, undefined}.

to_html(ReqData, State) ->
    Path = priv_dir(templates) ++ "/latest.mustache",
    {ok, TemplateBin} = file:read_file(Path),
    TemplateStr = binary_to_list(TemplateBin),

    BaseUrl = base_url(ReqData),

    {ok, LatestLinks} = petite_url_srv:get_latest(20),
    LatestDicts = [dict:from_list([{short_link, BaseUrl ++ ShortLink},
       {long_link, LongLink}]) || {ShortLink, LongLink} <- LatestLinks],
    Context = dict:from_list([{links, LatestDicts}]),
    
    Response = mustache:render(TemplateStr, Context),
    {Response, ReqData, State}.

content_types_provided(ReqData, State) ->
    {[{"text/html", to_html},
      {"text/plain", to_text},
      {"application/json", to_json}],ReqData, State}.

to_text(ReqData, State) ->
    {ok, LatestLinks} = petite_url_srv:get_latest(20),
    Result = lists:map(
	       fun({Code, Link}) ->
		       [base_url(ReqData), Code, " ", Link, "\n"]
	       end,
	       LatestLinks),
    {Result, ReqData, State}.

to_json(ReqData, State) ->
    {ok, LatestLinks} = petite_url_srv:get_latest(20),
    LinkList = lists:map(
		 fun({Code, Link}) ->
			 ShortLink = base_url(ReqData) ++ Code,
			 {struct, [{<<"short_link">>, list_to_binary(ShortLink)},
				   {<<"long_link">>, list_to_binary(Link)}]}
		 end,
		 LatestLinks),
    Result = mochijson2:encode({struc, [{latest, LinkList}]}),
    {[Result, "\n"], ReqData, State}.

%% helpers
priv_dir(Name) ->
    case code:priv_dir(Name) of
        {error, bad_name} ->
            Ebin = filename:dirname(code:which(?MODULE)),
            filename:join([filename:dirname(Ebin), "priv", "templates"]);
        Dir ->
            Dir
    end.

base_url(ReqData) ->
    Host = wrq:get_req_header("host", ReqData),
    "http://" ++ Host ++ "/".
