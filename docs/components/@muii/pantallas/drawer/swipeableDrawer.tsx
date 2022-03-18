import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

function swipeableDrawerr() {
  const [open, setOpen] = React.useState(false);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor="left" // left | right | top | bottom ( posicion del drawer )
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(!open)}
      variant="temporary" // temporary | permanent | persistent
      ModalProps={{
        keepMounted: true, // mejor rendimiento en mobiles.
      }}
      disableBackdropTransition={!iOS} // true | false (si es true ayuda al rendimiento en dispositivos de gama baja)
      disableDiscovery={iOS}
      sx={{
        display: { xs: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "20%" }, //modificando el tamaño
      }}
    >
      {/* Contenido */}
    </SwipeableDrawer>
  );
}

export default swipeableDrawerr;
