import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login/Login";
import { getTokenFromUrl } from "./Spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player/Player";
import { useDataValueLayer } from "./ContextApi/DataLayer";

const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataValueLayer();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      /* spotify.setAccessToken(_token); */
      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      s.getPlaylist("37i9dQZEVXcJuzEIxcpNfx").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
