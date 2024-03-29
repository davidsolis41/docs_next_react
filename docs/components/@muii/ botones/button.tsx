import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import purple from "@mui/material/colors/purple";

export default function Buttonn() {
  return (
    <Button
      aria-label="texto de ayuda a ceguera"
      name=""
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
      fullWidth
      sx={{}}
      onClick={() => {}}
    >
      Contained
    </Button>
  );
}

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
