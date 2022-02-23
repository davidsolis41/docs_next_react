import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

export default function slider() {
  const [valor, setValor] = React.useState(10);
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
      aria-label="Texto de ayuda para ceguera"
      size="medium" // small | medium
      color="secondary"
      valueLabelDisplay="auto" // off | auto | on => para que simpre este activo el tooltip
      min={0}
      max={100}
      step={10} // OPCIONAL indicar los puntos de control
      marks={marks} // true si queremos los puntos de corte automaticos
      value={valor}
      onChange={(e: Event, newValue: number | number[]) =>
        setValor(Number(newValue))
      }
    />
  );
}

const CustomSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
