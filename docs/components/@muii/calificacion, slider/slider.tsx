import React from "react";
import Slider from "@mui/material/Slider";

function slider() {
  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];

  return (
    <Slider
      value={10}
      onChange={(e: Event, newValue: number | number[]) => {}}
      valueLabelDisplay="auto" // "on" para que simpre este activo el tooltip
      min={0}
      max={100}
      step={10} // indicar los puntos de control
      marks={marks} // true si queremos los puntos de corte automaticos
      size="medium" // "small"
      color="secondary"
      aria-label="Texto de ayuda para ceguera"
    />
  );
}

export default slider;
