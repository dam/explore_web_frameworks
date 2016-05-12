-module(petite_resource).
-export([
    init/1,
    content_types_provided/2,
    to_html/2,
    to_text/2
]).

-include_lib("webmachine/include/webmachine.hrl").

-spec init(list()) -> {ok, term()}.
init([]) ->
    {ok, undefined}.

content_types_provided(ReqData, State) ->
    {[{"text/html", to_html}, {"text/plain", to_text}], ReqData, State}.

-spec to_html(wrq:reqdata(), term()) -> {iodata(), wrq:reqdata(), term()}.
to_html(ReqData, State) ->
    {"<html><body>Hello, new world</body></html>", ReqData, State}.

to_text(ReqData, State) ->
    {"Hello, text word\n", ReqData, State}.
