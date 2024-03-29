import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function TextFieldd() {
  const [valorInput, setValorInput] = React.useState("");
  return (
    <TextField
      aria-label="ayuda a ceguera"
      label=""
      name=""
      variant="outlined" // outlined | filled | standard
      size="small" // small | medium
      type="text" // todos los tipos de HTML
      margin="none" // none | dense | normal * margen arriba y abajo
      color="primary"
      helperText="texto de ayuda"
      multiline // cuando queremos que sea multilinea
      maxRows={2} // indica las lineas que se puede expandir
      fullWidth
      required
      error
      value={valorInput}
      onChange={({ target: { value } }) => setValorInput(value)}
      InputLabelProps={{
        shrink: true, // el nombre siempre estara arriba
      }}
      InputProps={{
        // iconos al inicio o final
        startAdornment: <InputAdornment position="start">KG</InputAdornment>,
        endAdornment: (
          <InputAdornment position="end">
            <AccountCircleIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

const StyledOutlinedTextField = styled(TextField)(
  ({ theme, helperText }) => `
    height: ${helperText ? "53px" : "35px"};
    input{
        padding: 5px;
        padding-left: 8px;
    }
    label {
        margin-top: -10px;
    }
    .MuiInputLabel-outlined .Mui-focused{
        margin-top: 0px;
        margin-bottom: 3px;
    }
    .MuiInputLabel-shrink {
        margin-top: 0px;
    }
    .MuiFormHelperText-root{
        margin-left: 5px;
        margin-right: 5px;
        font-size: 0.75rem;
    }
    '&:hover fieldset': {
      borderColor: "",
    },
`
);
