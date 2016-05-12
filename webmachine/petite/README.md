Project Skeleton for the petite app.

You should find in this directory:

README : this file
Makefile : simple make commands
rebar.config : configuration for Rebar3
/src
  /petite.app.src : application information file for OTP
  /petite_app.erl : base module for the Erlang application behavior
  /petite_config.erl : configuration interface for your application
  /petite_sup.erl : OTP supervisor for the application
  /petite_resource.erl : a simple example Webmachine resource
/priv
  /www : a convenient place to put your static web content

You probably want to do one of a couple of things at this point:

### Build the skeleton application:

```
$ rebar3 compile
```

### Start up the skeleton application:
```
$ rebar3 release
...
$ ./_build/default/rel/petite/bin/petite console
```

*or*

```
$ rebar3 shell
```

### Change the basic application:
* edit src/petite_resource.erl

### Add some new resources:
* edit src/YOUR_NEW_RESOURCE.erl
* edit src/petite_config.erl's `dispatch/0` function

### On the fly editing

We're using `sync` now to do on the fly compilation of resources.

Once you're in a console, just type `sync:go().` and it will recompile
your files on the fly, but you'll have to use the dev profile:

```
$ rebar3 as dev shell
```


