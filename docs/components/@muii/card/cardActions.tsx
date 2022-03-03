import React from "react";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  //marginLeft: "auto", // para alinear el item a la izquierda
}));

export default function CardActionss() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <CardActions aria-label="Acciones de la tarjeta" disableSpacing sx={{}}>
      <IconButton aria-label="Añadir a favoritos">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="Compatir">
        <ShareIcon />
      </IconButton>
      <div style={{ flexGrow: 1 }} />
      <ExpandMore
        aria-label="Ver más"
        expand={expanded}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
  );
}
