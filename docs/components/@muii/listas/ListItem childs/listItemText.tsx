import React from "react";
import ListItemText from "@mui/material/ListItemText";

export default function ListItemTextt() {
  return (
    <ListItemText
      primary="Texto Primario (Title)"
      secondary={<p>Texto Secundario (Subtitulo)</p>}
    />
  );
}
