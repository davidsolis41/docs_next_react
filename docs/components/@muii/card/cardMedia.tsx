import React from "react";
import CardMedia from "@mui/material/CardMedia";

export default function CardMediaa() {
  return (
    <CardMedia
      component="img"
      alt="texto alternativo"
      image="/static/images/cards/contemplative-reptile.jpg"
      //src="" // OPCIONAL, podemos usarlo si el componente es una img o video
      height="140"
      sx={{}}
    />
  );
}
