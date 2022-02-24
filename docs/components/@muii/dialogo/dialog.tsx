import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const SlideTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="up" // up | down | left | right
      ref={ref}
      {...props}
    />
  );
});

export default function Dialogg() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={SlideTransition} // OPCIONAL, indica la transicion que hara al ingresar en la pantalla
      fullScreen // OPCIONAL dialogo en pantalla completa
      maxWidth="xs" // xs  | sm | md | lg | xl (OPCIONAL tamaño maximo del modal)
      keepMounted // OPCIONAL es para mantener el componente en el dom, sirve para seo y velocidad
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <p style={{ fontWeight: "bold" }}>
          ¿Quieres proporcioar acceso a la ubicación?
        </p>
      </DialogTitle>
      <DialogContent /*dividers*/>
        <DialogContentText id="alert-dialog-description">
          Esta aplicación utilizara el acceso a tu ubicacion en tiempo real para
          brindarte un mejor servicio
        </DialogContentText>
        {/* AQUI VA TODO LO QUE NO SEA TEXTO */}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          Negar
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
          }}
          autoFocus
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
