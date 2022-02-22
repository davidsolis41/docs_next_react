import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function iconButton() {
  return (
    <IconButton
      aria-label="texto de ayuda a ceguera"
      name=""
      size="small"
      color="secondary"
      className=""
      disabled={false}
      tabIndex={1}
      sx={{}}
      onClick={() => {}}
    >
      <MenuIcon sx={{ fontSize: "2rem", color: "white" }} />
    </IconButton>
  );
}

export default IconButton;
