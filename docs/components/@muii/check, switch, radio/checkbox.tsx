import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

function checkbox() {
  return (
    <FormControlLabel
      label="My checkbox"
      value="My checkbox"
      labelPlacement="top" //posicion del label
      control={
        <Checkbox
          color="secondary"
          checked={false}
          onChange={({ target: { checked } }) => {}}
          onClick={() => {}}
          aria-label="Texto de ayuda a ceguera"
          className=""
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 28 }, //OPCIONAL tamaño del check
            color: "",
            "&.Mui-checked": {
              color: "",
            },
          }}
          icon={<FavoriteBorder sx={{ fontSize: 20 }} />} //OPCIONAL cuando queremos cambiar el icono
          checkedIcon={<Favorite sx={{ fontSize: 20, color: "red" }} />} //OPCIONAL cuando queremos cambiar el icono
        />
      }
      disabled={false}
      className=""
      sx={{}}
    />
  );
}

export default checkbox;
