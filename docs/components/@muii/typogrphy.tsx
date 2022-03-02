import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export default function typogrphy() {
  return (
    <Typography
      variant="h2" // h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2 | body1 | body2 | button | caption | overline
      component="h2" // OPCIONAL componente HTML que utilizara
      display="block" // OPCIONAL para hacer un bloque
      noWrap // OPCIONAL para que cuando el texto sea muy grande se trunque con ...
      className=""
      style={{}}
      sx={{}}
      gutterBottom // OPCIONAL para que tenga un espacio abajo
    >
      soy un h2
    </Typography>
  );
}

const DivStyledTextButtom = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
