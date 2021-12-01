import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function toggleButton() {
  return (
    <ToggleButtonGroup
      value={"web"}
      onChange={(e, newValue) => {}}
      size="medium" // "small" "large"
      color="primary" // si se quiere agregar color a los textos y bordes
      exclusive // poner si solo se puede seleccionar uno
    >
      <ToggleButton value="web" aria-label="ayuda a ceguera">
        Web
      </ToggleButton>

      <ToggleButton value="android" aria-label="ayuda a ceguera">
        Android
      </ToggleButton>

      <ToggleButton value="ios" aria-label="ayuda a ceguera" disabled>
        iOS
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default toggleButton;
