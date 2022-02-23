import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

function dividerWhitText() {
  return (
    <Divider
      component="li"
      textAlign="center" // left | right | center
      variant="fullWidth" // fullWidth (en todo tiene)| inset (al inicio no tiene) | middle (en las orrilla no)
      orientation="horizontal" // horizontal | vertical
      flexItem // solo cuando es vertical se usa esta propiedad
    >
      <Chip label="CHIP" />
    </Divider>
  );
}

export default dividerWhitText;
