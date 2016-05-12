-module(named_resource).
-export([init/1, to_html/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) ->
    {ok, undefined}.

to_html(ReqData, State) ->
    {["see named parameter, ", wrq:path_info(who, ReqData), "\n"], ReqData, State}.
