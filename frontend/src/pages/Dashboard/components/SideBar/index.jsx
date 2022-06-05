import React from "react";
import { Link } from "react-router-dom";
import {
  VscSettingsGear,
  VscAccount,
  VscSourceControl,
  VscGraph,
} from "react-icons/vsc";
import "./style.css";

export default function SideBar() {
  return (
    <nav className="sideBar_dashboard">
      <Link exact to={"mycriptos"}>
        <VscGraph />
        dashboard
      </Link>
      <Link exact to={"mycriptos"}>
        <VscSourceControl />
        my criptos
      </Link>
      <Link exact to={"user"}>
        <VscAccount />
        profile
      </Link>
      <Link exact to={"settings"}>
        <VscSettingsGear />
        settings
      </Link>
    </nav>
  );
}
