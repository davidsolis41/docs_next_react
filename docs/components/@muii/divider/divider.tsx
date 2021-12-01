import React from "react";
import Divider from "@mui/material/Divider";

function divider() {
  return (
    <Divider
      component="li"
      variant="fullWidth" // "inset" al inicio no) "middle" en las orrilla no
      orientation="horizontal"
      flexItem // solo cuando es vertical se usa esta propiedad
    />
  );
}

export default divider;
