import React from "react";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListItemm() {
  return (
    <ListItem
      alignItems="flex-start" // flex-start | center
      className=""
      sx={{}}
      secondaryAction={
        // para indicar el icono de la dereccha (final)
        <IconButton edge="end">
          <DeleteIcon />
        </IconButton>
      }
    >
      {/* para barras laterales se puede utilizar un ListItemButtom */}
      {/* contenido del item de la lista */}
    </ListItem>
  );
}
