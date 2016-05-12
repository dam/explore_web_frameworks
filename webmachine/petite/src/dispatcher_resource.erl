-module(dispatcher_resource).
-export([
    init/1,
    to_html/2
]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) ->
    {ok, undefined}.

to_html(ReqData, State) ->
    {["you asked for ", wrq:path(ReqData), "\n", "start path was ", wrq:disp_path(ReqData), "\n"], ReqData, State}.
