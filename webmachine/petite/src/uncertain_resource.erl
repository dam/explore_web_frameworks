-module(uncertain_resource).
-export([
    init/1,
    to_html/2,
    resource_exists/2,
    previously_existed/2,
    moved_permanently/2
]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) ->
    {ok, undefined}.

resource_exists(ReqData, State) ->
    {false, ReqData, State}.

previously_existed(ReqData, State) ->
    {true, ReqData, State}.

moved_permanently(ReqData, State) ->
    {{true, "http://pragprog.com"}, ReqData, State}.

to_html(ReqData, State) ->
    {"nothing to see here", ReqData, State}.
    
