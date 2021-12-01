import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";

function avatarChip() {
  return (
    <Chip
      avatar={<Avatar>M</Avatar>}
      label="mi primer chip"
      variant="filled" // "outlined"
      size="medium" // "small"
      onClick={() => {}}
      onDelete={() => {}}
      deleteIcon={<DeleteIcon />} //solo si queremos cambiar el icono de eliminado
    />
  );
}

export default avatarChip;
