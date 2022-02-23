import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AvatarChip() {
  return (
    <Chip
      aria-label="texto de ayuda para ceguera"
      avatar={<Avatar>M</Avatar>}
      label="mi primer chip"
      variant="filled" // outlined | filled
      color="primary" // OPCIONAL por defecto ya tiene el color gris
      size="medium" // small | medium
      onClick={() => {}}
      onDelete={() => {}}
      deleteIcon={<DeleteIcon />} //solo si queremos cambiar el icono de eliminado
      //href="#basic-chip" // SOLO CUANDO ES UN ENLACE
      //clickable // SOLO CUANDO ES UN ENLACE
    />
  );
}
