import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function DialogContentt() {
  return (
    <DialogContent
      dividers // para que tenga divider al inicio y final
    >
      <DialogContentText id="alert-dialog-description">
        Contenido de texto
      </DialogContentText>
      {/* AQUI VA TODO LO QUE NO SEA TEXTO */}
    </DialogContent>
  );
}
