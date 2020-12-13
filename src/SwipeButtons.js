import React from "react";
import "./SwipeButtons.css";
import { Close, FlashOn, Replay, StarRate, Favorite } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <Replay fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <Close fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRate fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <Favorite fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOn fontsize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
