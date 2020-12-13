import React from "react";
import { Person, Forum, ArrowBack } from "@material-ui/icons";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBack className="header__back" />
        </IconButton>
      ) : (
        <IconButton>
          <Person className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
          alt="logo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <Forum className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
