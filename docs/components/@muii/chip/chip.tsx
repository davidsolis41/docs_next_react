import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Chipp() {
  return (
    <Chip
      aria-label="texto de ayuda para ceguera"
      label="mi primer chip"
      variant="filled" // outlined | filled
      color="primary" // OPCIONAL por defecto ya tiene el color gris
      size="medium" // small | medium
      onClick={() => {}} // OPCIONAL si es clickable
      onDelete={() => {}} // OPCIONAL para que ponga el simbolo de la X
      deleteIcon={<DeleteIcon />} //solo si queremos cambiar el icono de eliminado
      //href="#basic-chip" // SOLO CUANDO ES UN ENLACE
      //clickable // SOLO CUANDO ES UN ENLACE
    />
  );
}
