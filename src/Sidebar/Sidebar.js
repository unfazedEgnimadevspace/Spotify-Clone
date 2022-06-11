import React from "react";
import "./Sidebar.css";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { BiLibrary } from "react-icons/bi";
import { useDataValueLayer } from "../ContextApi/DataLayer";
const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataValueLayer();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOptions option={"Home"} Icon={HomeIcon} />
      <SidebarOptions option={"Search"} Icon={SearchIcon} />
      <SidebarOptions option={"Your Library"} Icon={BiLibrary} />

      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions option={playlist.name} key={playlist.id} />
      ))}
    </div>
  );
};

export default Sidebar;
