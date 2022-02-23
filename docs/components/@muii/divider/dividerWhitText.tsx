import React from "react";
import Divider from "@mui/material/Divider";

function dividerWhitText() {
  return (
    <Divider
      component="li"
      textAlign="center" // left | right | center
      variant="fullWidth" // fullWidth (en todo tiene)| inset (al inicio no tiene) | middle (en las orrilla no)
      orientation="horizontal" // horizontal | vertical
      flexItem // solo cuando es vertical se usa esta propiedad
    >
      ESTE ES EL DIVIDER
    </Divider>
  );
}

export default dividerWhitText;
