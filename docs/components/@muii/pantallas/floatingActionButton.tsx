import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function floatingActionButton() {
  return (
    <Fab color="primary" size="medium" aria-label="Texto de ayuda a ceguera">
      <AddIcon />
    </Fab>
  );
}

export default floatingActionButton;
