defmodule HelloPhoenix.PageController do
  use HelloPhoenix.Web, :controller

  def index(conn, _params) do
    conn 
    |> put_flash(:info, "Welcome to Phoenix")
    |> put_flash(:error, "Let's pretend that we have an error")
    |> render("index.html")
  end
end
