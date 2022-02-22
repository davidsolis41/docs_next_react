import React from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

function floatingActionButtonExtend() {
  return (
    <Fab
      variant="extended"
      color="primary"
      size="medium"
      aria-label="Texto de ayuda a ceguera"
    >
      <NavigationIcon sx={{ mr: 1 }} />
      Navigate
    </Fab>
  );
}

export default floatingActionButtonExtend;
