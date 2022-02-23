import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Radioo() {
  const [generoSeleccionado, setGeneroSeleccionado] = React.useState("");
  return (
    <RadioGroup
      aria-labelledby="Texto de ayuda para ceguera"
      value={generoSeleccionado}
      onChange={({ target: { value } }) => setGeneroSeleccionado(value)}
      row // indicar que se vera en horizantal
    >
      <FormControlLabel
        label="Mujer"
        value="Mujer"
        labelPlacement="end" // start | end | bottom | top
        control={
          <Radio
            aria-label="texto de ayuda para ceguera"
            name=""
            color="warning"
            size="medium" // small | medium
            icon={<FavoriteBorderIcon sx={{ fontSize: 25 }} />} //OPCIONAL cuando queremos cambiar el icono
            checkedIcon={<FavoriteIcon sx={{ fontSize: 25, color: "red" }} />} //OPCIONAL cuando queremos cambiar el icono
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 25,
              },
            }}
          />
        }
      />
      <FormControlLabel
        label="Hombre"
        value="Hombre"
        labelPlacement="end" // start | end | bottom | top
        control={
          <Radio
            aria-label="texto de ayuda para ceguera"
            name=""
            color="success"
            size="medium" // small | medium
            icon={<FavoriteBorderIcon sx={{ fontSize: 25 }} />} //OPCIONAL cuando queremos cambiar el icono
            checkedIcon={<FavoriteIcon sx={{ fontSize: 25, color: "red" }} />} //OPCIONAL cuando queremos cambiar el icono
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 25,
              },
            }}
          />
        }
      />
    </RadioGroup>
  );
}
