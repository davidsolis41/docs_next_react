import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function iconButton() {
  return (
    <IconButton
      onClick={() => {}}
      aria-label="texto de ayuda a ceguera"
      size="small"
      color="secondary"
      className=""
      disabled={false}
    >
      <MenuIcon sx={{ fontSize: "2rem", color: "white" }} />
    </IconButton>
  );
}

export default IconButton;
