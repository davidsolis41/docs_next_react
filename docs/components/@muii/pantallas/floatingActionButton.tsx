import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingActionButtonn() {
  return (
    <Fab
      aria-label="Texto de ayuda para ceguera"
      color="primary"
      size="medium" // small | medium | large
    >
      <AddIcon sx={{}} />
    </Fab>
  );
}
