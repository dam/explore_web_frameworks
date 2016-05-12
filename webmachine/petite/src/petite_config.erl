-module(petite_config).

-export([
    dispatch/0,
    web_config/0
]).

-spec dispatch() -> [webmachine_dispatcher:route()].
dispatch() ->
    lists:flatten([
        {[], petite_resource, []},
        {["shorten"], petite_shorten_resource, []},
        {["basic"], template_basic_resource, []},
        {["file"], template_file_resource, []},
	{["latest"], petite_latest_resource, []},
        {[code], petite_fetch_resource, []}
        % {["uncertain"], uncertain_resource, []},
        % {["dispatcher", '*'], dispatcher_resource, []},
        % {["goodbye", who], named_resource, []}
    ]).

web_config() ->
    {ok, App} = application:get_application(?MODULE),
    {ok, Ip} = application:get_env(App, web_ip),
    {ok, Port} = application:get_env(App, web_port),
    [
        {ip, Ip},
        {port, Port},
        {log_dir, "priv/log"},
        {dispatch, dispatch()}
    ].
