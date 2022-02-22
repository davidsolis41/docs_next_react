import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function avatarGroup() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://misitio.com/imagen" />
      <Avatar alt="Travis Howard" src="https://misitio.com/imagen" />
      <Avatar alt="Cindy Baker" src="https://misitio.com/imagen" />
      <Avatar alt="Agnes Walker" src="https://misitio.com/imagen" />
      <Avatar alt="Trevor Henderson" src="https://misitio.com/imagen" />
    </AvatarGroup>
  );
}

export default avatarGroup;
