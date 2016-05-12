-module(template_basic_resource).
-export([init/1, to_html/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) ->
    {ok, undefined}.

to_html(ReqData, State) ->
    Template = "<html><body>Visit {{ url }}</body></html>",
    Context = dict:from_list([{url, "https://pragprog.com"}]),
    Response = mustache:render(Template, Context),
    {Response, ReqData, State}.
