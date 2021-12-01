import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function button() {
  return (
    <Button
      onClick={() => {}}
      variant="outlined" // "contained" | "text"
      color="primary"
      size="medium"
      startIcon={<DeleteIcon />} //OPCIONAL icono al inicio
      endIcon={<SendIcon />} //OPCIONAL icono al final
      aria-label="texto de ayuda a ceguera"
      disabled={false}
      disableElevation={false}
      sx={{}}
    >
      Contained
    </Button>
  );
}

export default button;
