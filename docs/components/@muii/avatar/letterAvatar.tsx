import React from "react";
import Avatar from "@mui/material/Avatar";

function letterAvatar() {
  return (
    <Avatar
      aria-label="texto de ayuda para ceguera"
      variant="circular" // circular | square | rounded
      sx={{ bgcolor: "blue", width: 50, height: 50 }}
    >
      DS
    </Avatar>
  );
}

export default letterAvatar;
