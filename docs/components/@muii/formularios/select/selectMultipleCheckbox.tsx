import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import FilledInput from "@mui/material/FilledInput";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

export default function SelectMultipleCheckbox() {
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
        renderValue={(selected) =>
          selected
            .map((i) => paises.find((el) => el.id === i)?.nombre)
            .join(", ")
        }
      >
        {paises.map((pais, i) => (
          <MenuItem key={i} value={pais.id}>
            <Checkbox
              checked={Boolean(paisesSeleccionados.find((id) => id == pais.id))}
            />
            <ListItemText primary={pais.nombre} />
          </MenuItem>
        ))}
      </Select>
      {paisesSeleccionados.length === 3 && (
        <FormHelperText>Seleccionaste todos</FormHelperText>
      )}
    </FormControl>
  );
}
