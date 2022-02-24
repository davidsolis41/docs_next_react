import React from "react";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListItemSecondaryActionn() {
  return (
    <ListItemSecondaryAction>
      <IconButton edge="end">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  );
}
