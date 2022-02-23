import React from "react";
import Divider from "@mui/material/Divider";

function divider() {
  return (
    <Divider
      component="li" // componente HTML
      variant="fullWidth" // fullWidth (en todo tiene)| inset (al inicio no tiene) | middle (en las orrilla no)
      orientation="horizontal" // horizontal | vertical
      flexItem // solo cuando es vertical se usa esta propiedad
    />
  );
}

export default divider;
