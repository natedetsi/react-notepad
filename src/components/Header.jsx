import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import Slide from "@material-ui/core/Slide";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <header>
      <Slide direction="right" in={true} timeout={1000}>
        <h1>
          <DescriptionIcon />
          Note Pad
        </h1>
      </Slide>
      <div className="avatar">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </header>
  );
}

export default Header;
