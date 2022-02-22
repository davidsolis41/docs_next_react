import React from "react";
import Divider from "@mui/material/Divider";

function dividerWhitText() {
  return (
    <Divider
      component="li"
      textAlign="left" // "right" "center"
      variant="fullWidth" // "inset" al inicio no) "middle" en las orrilla no
      orientation="horizontal"
      flexItem // solo cuando es vertical se usa esta propiedad
    >
      ESTE ES EL DIVIDER
    </Divider>
  );
}

export default dividerWhitText;
