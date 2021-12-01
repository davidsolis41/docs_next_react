import React from "react";
import Avatar from "@mui/material/Avatar";

function imageAvatar() {
  return (
    <Avatar
      variant="circular" // "square" "rounded"
      src="https://misitio.com/imagen"
      alt="usuario juan perez"
      sx={{ width: 50, height: 50 }}
    />
  );
}

export default imageAvatar;
