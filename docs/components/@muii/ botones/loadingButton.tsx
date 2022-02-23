import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

export default function LoadingButtonn() {
  const [cargando, setCargando] = React.useState(false);
  return (
    <LoadingButton
      loading={cargando} //INIDCADOR DE CARGA
      loadingPosition="start" // start | center | end
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
      Enviar
    </LoadingButton>
  );
}

const CustomLoadingButton = styled(LoadingButton)(({ theme }) => ({
  color: theme.palette.getContrastText("black"),
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "grey",
  },
}));
