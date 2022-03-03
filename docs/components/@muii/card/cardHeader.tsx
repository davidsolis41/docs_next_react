import React from "react";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function CardHeaderr() {
  return (
    <CardHeader
      component="section"
      avatar={
        <Avatar aria-label="Avatar del creador" sx={{ bgcolor: "blue" }}>
          D
        </Avatar>
      }
      title="Titulo de la publicación"
      subheader="Julio 31, 2021"
      disableTypography={false} // OPCIONAL, si true entonces elimina los estilos de tipografia por default
      titleTypographyProps={{}} // OPCIONAL, para modificar los estilos de tipografia
      subheaderTypographyProps={{}} // OPCIONAL, para modificar los estilos de tipografia
      action={
        <>
          <IconButton aria-label="configuraciones">
            <MoreVertIcon />
          </IconButton>
        </>
      }
    />
  );
}
