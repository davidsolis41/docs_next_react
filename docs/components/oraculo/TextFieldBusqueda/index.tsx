import React from "react";
import TextF from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import ModalIBusqueda from "./modalIBusqueda";
import { TextFieldBusquedaProps } from "./types";

const TextField = styled(TextF)(
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
`
);

let estilos = {
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyItems: "center",
    alignItems: "start",
  } as React.CSSProperties,
  icono: {
    marginTop: 5,
    marginLeft: 5,
    cursor: "pointer",
  },
};

function TextFieldBusqueda(props: TextFieldBusquedaProps) {
  const { textoTooltip = "Buscar", posicionTooltip = "top" } = props;
  return (
    <>
      <div style={estilos.container}>
        <TextField {...props} variant="outlined" />
        <Tooltip title={textoTooltip} placement={posicionTooltip} arrow>
          <SearchIcon
            color="primary"
            style={estilos.icono}
            onClick={() => props.setModal({ ...props.modal, open: true })}
          />
        </Tooltip>
      </div>

      {props.modal.open && (
        <ModalIBusqueda
          close={() => props.setModal({ ...props.modal, open: false })}
        >
          {props.children}
        </ModalIBusqueda>
      )}
    </>
  );
}

export default TextFieldBusqueda;
