import React from "react";
import Avatar from "@mui/material/Avatar";

function imageAvatar() {
  return (
    <Avatar
      aria-label="texto de ayuda para ceguera"
      variant="circular" // circular | square | rounded
      src="https://misitio.com/imagen"
      alt="usuario juan perez"
      sx={{ width: 50, height: 50 }}
    />
  );
}

export default imageAvatar;
