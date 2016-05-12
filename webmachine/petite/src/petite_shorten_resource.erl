-module(petite_shorten_resource).
-export([init/1,
         allowed_methods/2,
         process_post/2,
         content_types_provided/2,
         to_text/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) ->
    {ok, undefined}.
allowed_methods(ReqData, State) ->
    {['POST'], ReqData, State}.

content_types_provided(ReqData, State) ->
    {[{"text/plain", to_text}], ReqData, State}.

process_post(ReqData, State) ->
    Host = wrq:get_req_header("host", ReqData),
    Params = mochiweb_util:parse_qs(wrq:req_body(ReqData)),
    Url = proplists:get_value("url", Params),
    {ok, Code} = petite_url_srv:put_url(Url),
    Shortened = "http://" ++ Host ++ "/" ++ Code ++ "\n",
    {true, wrq:set_resp_body(Shortened, ReqData), State}.

to_text(ReqData, State) ->
    {"", ReqData, State}.
