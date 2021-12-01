import React from "react";
import Slider from "@mui/material/Slider";

function rangeSlider() {
  return (
    <Slider
      value={[0, 55]}
      onChange={(e: Event, newValue: number | number[]) => {}}
      valueLabelDisplay="auto" // "on" para que simpre este activo el tooltip
      min={0}
      max={100}
      color="secondary"
      size="medium" // "small"
      aria-label="Texto de ayuda para ceguera"
    />
  );
}

export default rangeSlider;
