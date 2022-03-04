import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Provider from "../../../providers/Provider";
import { url } from "../../../utils/url";

export default function Autocompletado() {
  const [proveedores, setProveedores] = React.useState<any[]>([
    { codigoProveedor: 1, nombreProveedor: "prov 1" },
    { codigoProveedor: 2, nombreProveedor: "prov 2" },
    { codigoProveedor: 3, nombreProveedor: "prov 3" },
  ]);

  const [proveedorSeleccionado, setProveedorSeleccionado] = React.useState("");
  const [textoAutocomplete, setTextoAutocomplete] = React.useState("");
  const [cargando, setCargando] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      let peticionProveedores = await Provider.get(
        `${url}/proveedores?nombreProveedor=%${
          proveedorSeleccionado
            ? textoAutocomplete.substring(0, 4)
            : textoAutocomplete
        }%&PageSize=50`
      );

      if (peticionProveedores.status === 200) {
        setProveedores(peticionProveedores.data);
      } else {
        setProveedores([]);
        alert(peticionProveedores.data);
      }
    })();
  }, [textoAutocomplete, proveedorSeleccionado]);

  return (
    <Autocomplete
      aria-label="texto de ayuda para ceguera"
      options={proveedores}
      className="w-20"
      loading={cargando} // se utiliza cuando se llena asincronamente
      blurOnSelect
      getOptionLabel={(option) =>
        option.nombreProveedor ? option.nombreProveedor : ""
      }
      //multiple // definimos que será de seleccion multiple
      //freeSolo // cuando no queremos que limpie si no es una opcion del arreglo
      value={
        proveedores.filter(
          (prov) => prov.codigoProveedor == proveedorSeleccionado
        )[0] || (undefined as any)
      }
      onChange={(event, newValue) => {
        setProveedorSeleccionado(newValue?.codigoProveedor || 0);
      }}
      onInputChange={(event, newInputValue) =>
        setTextoAutocomplete(newInputValue)
      }
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
