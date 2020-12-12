import React from "react";
import { Person, Forum } from "@material-ui/icons";
import "./Header.css";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
        alt="logo"
      />
      <IconButton>
        <Forum className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
