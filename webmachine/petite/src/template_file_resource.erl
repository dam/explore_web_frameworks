-module(template_file_resource).
-export([init/1, to_html/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) ->
    {ok, undefined}.

to_html(ReqData, State) ->
    Path = priv_dir(templates) ++ "/simple.mustache",
    io:format("Path: ~s~n", [Path]),
    {ok, TemplateBin} = file:read_file(Path),
    TemplateStr = binary_to_list(TemplateBin),
    io:format("Template content: ~s~n", [TemplateStr]),
    Context = dict:from_list([{message, "Hello from a file"}]),
    Response = mustache:render(TemplateStr, Context),
    {Response, ReqData, State}.

priv_dir(Name) ->
    case code:priv_dir(Name) of
        {error, bad_name} ->
            Ebin = filename:dirname(code:which(?MODULE)),
            filename:join([filename:dirname(Ebin), "priv", "templates"]);
        Dir ->
            Dir
    end.
