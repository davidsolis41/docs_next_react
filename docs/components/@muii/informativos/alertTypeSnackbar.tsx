import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

export default function AlertTypeSnackbar() {
  return (
    <Alert
      // para asignar icono, tambien color si la propidedad color no se pasa
      severity="success" // success | info | warning | error
      color="info" // OPCIONAL, es para asignar un color independientemente de la SEVERITY
      variant="standard" // standard | outlined | filled
      onClose={() => {}} // funcion de cierre, al pasarla se coloca el icono de X para ejecutar esto
      icon={<CheckIcon fontSize="inherit" />} // OPCIONAL, para cambiar el icono por defecto. Puede ser FALSE
      action={
        // OPCIONAL, es para reemplazar el icono de cierre, puede ser cualquier cosa
        <div
          style={{
            height: "100%",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
          }}
        >
          <Button variant="text" color="inherit" size="small">
            CERRAR
          </Button>
        </div>
      }
    >
      <AlertTitle>Error (TITULO OPCIONAL) </AlertTitle>
      Esta es una alerta — <strong>texto con negrita!</strong>
    </Alert>
  );
}
