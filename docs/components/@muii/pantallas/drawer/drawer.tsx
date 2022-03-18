import React from "react";
import Drawer from "@mui/material/Drawer";

function drawer() {
  const [open, setOpen] = React.useState(false);
  return (
    <Drawer
      anchor="left" // left | right | top | bottom ( posicion del drawer )
      open={open}
      onClose={() => setOpen(!open)}
      variant="temporary" // temporary | permanent | persistent
      ModalProps={{
        keepMounted: true, // mejor rendimiento en mobiles.
      }}
      sx={{
        display: { xs: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "20%" }, //modificando el tamaño
      }}
    >
      <section>
        <p>Soy el Drawer</p>
      </section>
    </Drawer>
  );
}

export default drawer;
