import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

export default function ToggleButtonn() {
  const [opcionSeleccionada, setOpcionSeleccionada] = React.useState("");
  return (
    <ToggleButtonGroup
      value={opcionSeleccionada}
      onChange={(e, newValue) => setOpcionSeleccionada(newValue)}
      size="medium" // small | medium | large
      color="primary" // si se quiere agregar color a los textos y bordes
      orientation="horizontal" // vertical | horizontal
      exclusive // si solo se puede seleccionar uno
      //si es de seleccion multiple el valor es un string[]
    >
      <ToggleButton
        aria-label="ayuda a ceguera"
        name="web"
        value="web"
        color="primary" // OPCIONAL por defecto ya trae color gris
        size="large" // small | medium | large
        disabled
        sx={{}}
      >
        Web
      </ToggleButton>

      <ToggleButton value="android" aria-label="ayuda a ceguera">
        Android
      </ToggleButton>

      <ToggleButton value="ios" aria-label="ayuda a ceguera">
        IOS
      </ToggleButton>

      <ToggleButton value="left" aria-label="ayuda a ceguera">
        <FormatAlignLeftIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
