import React from "react";
import Avatar from "@mui/material/Avatar";

function letterAvatar() {
  return (
    <Avatar
      variant="circular" // "square" "rounded"
      sx={{ bgcolor: "blue", width: 50, height: 50 }}
    >
      DS
    </Avatar>
  );
}

export default letterAvatar;
