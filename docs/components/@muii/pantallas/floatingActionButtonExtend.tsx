import React from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function FloatingActionButtonExtend() {
  return (
    <Fab
      aria-label="Texto de ayuda a ceguera"
      variant="extended"
      color="primary"
      size="medium" // small | medium | large
    >
      <NavigationIcon sx={{ mr: 1 }} />
      Navigate
    </Fab>
  );
}
