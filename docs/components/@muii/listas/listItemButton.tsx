import ListItemButton from "@mui/material/ListItemButton";
import React from "react";

export default function ListItemButtonn() {
  const [opcionSeleccioanda, setOpcionSeleccioanda] = React.useState(0);
  // Este componente es usado por ejemplo para las barras laterales
  // puede ir dentro del ListItem cubriendo todos los demas componetes de este
  return (
    <ListItemButton
      selected={opcionSeleccioanda === 1}
      onClick={(event) => {
        setOpcionSeleccioanda(1);
      }}
    >
      {/* childs del ListItem */}
    </ListItemButton>
  );
}
