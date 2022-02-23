import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

export default function rangeSlider() {
  const [valores, setValores] = React.useState<number[]>([0, 55]);
  return (
    <Slider
      aria-label="Texto de ayuda para ceguera"
      color="secondary"
      size="medium" // small | medium
      valueLabelDisplay="auto" // off | auto | on => para que simpre este activo el tooltip
      min={0}
      max={100}
      step={10} // OPCIONAL indicar los puntos de control
      value={valores}
      onChange={(e: Event, newValue: number | number[]) =>
        setValores(newValue as number[])
      }
    />
  );
}

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));
