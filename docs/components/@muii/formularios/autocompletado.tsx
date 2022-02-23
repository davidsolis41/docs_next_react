import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";

export default function Autocompletado() {
  const proveedores = [
    { codigoProveedor: 1, nombreProveedor: "prov 1" },
    { codigoProveedor: 2, nombreProveedor: "prov 2" },
    { codigoProveedor: 3, nombreProveedor: "prov 3" },
  ];

  const [proveedorSeleccionado, setProveedorSeleccionado] = React.useState("");
  const [cargando, setCargando] = React.useState(false);

  return (
    <Autocomplete
      aria-label="texto de ayuda para ceguera"
      options={proveedores}
      className="w-20"
      loading={cargando} // se utiliza cuando se llena asincronamente
      blurOnSelect
      getOptionLabel={(option: any) =>
        option.nombreProveedor ? option.nombreProveedor : ""
      }
      //multiple // definimos que será de seleccion multiple
      //freeSolo // cuando no queremos que limpie si no es una opcion del arreglo
      value={
        proveedores.filter(
          (prov: any) => prov.codigoProveedor == proveedorSeleccionado
        )[0] || proveedorSeleccionado
      }
      onChange={(event, newValue: any) => {
        setProveedorSeleccionado(newValue?.codigoProveedor || 0);
      }}
      onInputChange={(event, newInputValue) => console.log(newInputValue)}
      getOptionDisabled={(option) =>
        option.codigoProveedor === 0 || option.nombreProveedor === ""
      } // para indicar que opciones estan desabilitadas
      renderInput={(params) => (
        <TextField
          {...params}
          label="Proveedores"
          variant="standard"
          size="small"
          InputProps={{
            //SOLO CUANDO ES ASINCRONO
            ...params.InputProps,
            endAdornment: (
              <>
                {cargando ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <>
          <Box
            {...props}
            component="li"
            sx={{
              "&:hover": {
                fontWeight: "bold !important",
              },
            }}
          >
            {option.nombreProveedor}
          </Box>
          <Divider />
        </>
      )}
    />
  );
}
