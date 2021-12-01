import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

function chip() {
  return (
    <Chip
      label="mi primer chip"
      variant="filled" // "outlined"
      color="primary"
      size="medium" // "small"
      onClick={() => {}}
      onDelete={() => {}}
      deleteIcon={<DeleteIcon />} //solo si queremos cambiar el icono de eliminado
    />
  );
}

export default chip;
