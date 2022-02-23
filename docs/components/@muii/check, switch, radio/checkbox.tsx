import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export default function Checkboxx() {
  const [chekeado, setChekeado] = React.useState<boolean>(false);
  return (
    <FormControlLabel
      label="My checkbox"
      value="mycheckbox"
      labelPlacement="bottom" // start | end | bottom | top
      control={
        <Checkbox
          aria-label="Texto de ayuda a ceguera"
          name=""
          color="secondary"
          checked={chekeado}
          onChange={({ target: { checked } }) => setChekeado(checked)}
          size="medium" // small | medium
          className=""
          tabIndex={1}
          icon={<FavoriteBorder sx={{ fontSize: 20 }} />} //OPCIONAL cuando queremos cambiar el icono
          checkedIcon={<Favorite sx={{ fontSize: 20, color: "red" }} />} //OPCIONAL cuando queremos cambiar el icono
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 28 }, //OPCIONAL tamaño del check
            color: "",
            "&.Mui-checked": {
              color: "",
            },
          }}
        />
      }
      disabled={false}
      className=""
      sx={{}}
    />
  );
}
