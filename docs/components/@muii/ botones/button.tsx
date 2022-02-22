import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function button() {
  return (
    <Button
      aria-label="texto de ayuda a ceguera"
      variant="outlined" // outlined | contained | text
      color="primary"
      size="medium" // small | medium | large
      component="button" // componente HTML que usara
      href="#contained-buttons" // si es un boton de LINK
      startIcon={<DeleteIcon />} //OPCIONAL icono al inicio
      endIcon={<SendIcon />} //OPCIONAL icono al final
      disabled={false}
      disableElevation={false}
      tabIndex={1}
      sx={{}}
      onClick={() => {}}
    >
      Contained
    </Button>
  );
}

export default button;
