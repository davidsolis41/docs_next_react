import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function radio() {
  return (
    <RadioGroup
      row
      value={"Hombre"}
      onChange={({ target: { value } }) => {}}
      aria-label="Texto de ayuda para ceguera"
    >
      <FormControlLabel
        label="Mujer"
        value="Mujer"
        control={
          <Radio
            color="warning"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 25,
              },
            }}
            icon={<FavoriteBorderIcon sx={{ fontSize: 25 }} />} //OPCIONAL cuando queremos cambiar el icono
            checkedIcon={<FavoriteIcon sx={{ fontSize: 25, color: "red" }} />} //OPCIONAL cuando queremos cambiar el icono
          />
        }
      />
      <FormControlLabel
        label="Hombre"
        value="Hombre"
        control={
          <Radio
            color="success"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 25,
              },
            }}
            icon={<FavoriteBorderIcon sx={{ fontSize: 25 }} />} //OPCIONAL cuando queremos cambiar el icono
            checkedIcon={<FavoriteIcon sx={{ fontSize: 25, color: "red" }} />} //OPCIONAL cuando queremos cambiar el icono
          />
        }
      />
    </RadioGroup>
  );
}

export default radio;
