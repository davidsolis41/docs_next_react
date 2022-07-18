import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";

function list() {
  return (
    <List
      aria-labelledby="texto de ayuda para ceguera"
      component="ul"
      className=""
      sx={{ width: "100%", bgcolor: "background.paper" }}
      subheader={
        <ListSubheader component="section">
          Este es el encabezado de la lista
        </ListSubheader>
      }
    >
      <ListItem
        alignItems="flex-start" // flex-start | center
        secondaryAction={
          // para indicar el icono de la dereccha (final)
          <IconButton edge="end">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Texto Primario (Title)"
          secondary={<p>Texto Secundario (Subtitulo)</p>}
        />
      </ListItem>
    </List>
  );
}

export default list;
