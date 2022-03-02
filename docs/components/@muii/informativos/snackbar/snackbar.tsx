import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Fade, { FadeProps } from "@mui/material/Fade";
import Slide, { SlideProps } from "@mui/material/Slide";
import Grow, { GrowProps } from "@mui/material/Grow";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

function FadeTransition(props: FadeProps) {
  return <Fade {...props} />;
}

export default function Snackbarr() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={6000} // OPCIONAL para que se cierre solo (en milisegundos)
      anchorOrigin={{
        vertical: "top", // top | bottom
        horizontal: "right", // left | center | right
      }} // POCISION DEL SNACKBAR
      TransitionComponent={SlideTransition} // OPCIONAL cambiar la transicion
      message="Articulo eliminado"
      action={
        <>
          <Button size="small" onClick={handleClose}>
            Aceptar
          </Button>
          <IconButton size="small" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
}
