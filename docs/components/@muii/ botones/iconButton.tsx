import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function IconButtonn() {
  return (
    <IconButton
      aria-label="texto de ayuda a ceguera"
      name=""
      size="small"
      color="secondary"
      className=""
      disabled={false}
      tabIndex={1}
      edge="start" // OPCIONAL para eliminar el margin de un lado
      sx={{}}
      onClick={() => {}}
    >
      <MenuIcon sx={{ fontSize: "2rem", color: "black" }} />
    </IconButton>
  );
}
