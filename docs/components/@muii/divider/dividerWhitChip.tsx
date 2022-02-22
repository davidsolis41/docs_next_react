import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

function dividerWhitText() {
  return (
    <Divider
      component="li"
      textAlign="center" // "right" "center"
      variant="fullWidth" // "inset" al inicio no) "middle" en las orrilla no
      orientation="horizontal"
      flexItem // solo cuando es vertical se usa esta propiedad
    >
      <Chip label="CHIP" />
    </Divider>
  );
}

export default dividerWhitText;
