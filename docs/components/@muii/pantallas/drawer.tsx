import React from "react";
import Drawer from "@mui/material/Drawer";

function drawer() {
  const [open, setOpen] = React.useState(false);
  return (
    <Drawer
      anchor="left" // posicion del drawer
      open={open}
      onClose={() => setOpen(!open)}
      variant="temporary"
      ModalProps={{
        keepMounted: true, // mejor rendimiento en mobiles.
      }}
      sx={{
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
