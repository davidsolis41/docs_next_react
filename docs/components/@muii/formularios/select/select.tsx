import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

export default function Selectt() {
  const paises = [
    { id: 1, nombre: "Guatemala" },
    { id: 2, nombre: "El Salvador" },
    { id: 3, nombre: "Nicaragua" },
  ];

  const [paisSeleccionado, setPaisSeleccionado] = React.useState<number>();
  return (
    <FormControl
      variant="standard" // outlined | filled | standard
      sx={{ m: 1, minWidth: 120 }}
      required
      error
      disabled
    >
      <InputLabel id="label-seleccion-pais">Pais</InputLabel>
      <Select
        labelId="label-seleccion-pais"
        label="Pais"
        value={paisSeleccionado}
        onChange={({ target: { value } }) => setPaisSeleccionado(Number(value))}
        autoWidth // para que se redimencione segun el valor
      >
        <MenuItem value={0}>
          <em>None</em>
        </MenuItem>
        {paises.map((pais, i) => (
          <MenuItem key={i} value={pais.id}>
            {pais.nombre}
          </MenuItem>
        ))}
      </Select>
      {paisSeleccionado === 1 && (
        <FormHelperText>El mejor pais del mundo</FormHelperText>
      )}
    </FormControl>
  );
}
