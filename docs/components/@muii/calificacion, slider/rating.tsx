import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";

export default function Ratingg() {
  const [calificacion, setCalificacion] = React.useState(0);
  return (
    <Rating
      aria-label="texto de ayuda para ceguera"
      name=""
      precision={0.5} // unidades en las que se peude calificar
      max={5}
      size="medium" // small | medium | large
      className=""
      value={calificacion}
      onChange={(event, newValue) => setCalificacion(Number(newValue))}
      icon={<FavoriteIcon fontSize="inherit" color="primary" />} //OPCIONAL cuando queremos cambiar el icono
      emptyIcon={
        <FavoriteBorderIcon style={{ opacity: 0.55 }} fontSize="inherit" />
      }
      readOnly
      disabled
      sx={{}}
    />
  );
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
