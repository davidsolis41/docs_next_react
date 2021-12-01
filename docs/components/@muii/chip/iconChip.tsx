import React from "react";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import FaceIcon from "@mui/icons-material/Face";

function chip() {
  return (
    <Chip
      icon={<FaceIcon sx={{ fontSize: "1.2em", color: "white" }} />}
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
