import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import FilledInput from "@mui/material/FilledInput";
import Input from "@mui/material/Input";

export default function SelectMultiple() {
  const paises = [
    { id: 1, nombre: "Guatemala" },
    { id: 2, nombre: "El Salvador" },
    { id: 3, nombre: "Nicaragua" },
  ];

  const [paisesSeleccionados, setPaisesSeleccionados] = React.useState<
    number[]
  >([]);
  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      size="small" // small | medium
      required
      error
      disabled
    >
      <InputLabel id="label-seleccion-paises">Paises</InputLabel>
      <Select
        labelId="label-seleccion-paises"
        label="Paises"
        multiple
        value={paisesSeleccionados}
        onChange={({ target: { value } }) =>
          setPaisesSeleccionados(
            typeof value === "string"
              ? value.split(",").map((v) => Number(v))
              : value
          )
        }
        input={<OutlinedInput label="Paises" />} // OutlinedInput | FilledInput | Input
        autoWidth // para que se redimencione segun el valor
      >
        {paises.map((pais, i) => (
          <MenuItem key={i} value={pais.id}>
            {pais.nombre}
          </MenuItem>
        ))}
      </Select>
      {paisesSeleccionados.length === 3 && (
        <FormHelperText>Seleccionaste todos</FormHelperText>
      )}
    </FormControl>
  );
}
