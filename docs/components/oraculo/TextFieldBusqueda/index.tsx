import React from "react";
import TextF from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import ModalBusqueda from "./modalBusqueda";
import { styled } from "@mui/material/styles";
import { TextFieldBusquedaProps } from "./types";

const TextField = styled(TextF)(({ theme, helperText, variant }) =>
  variant === "outlined" || !variant
    ? `
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
    }`
    : ``
);

let estilos = {
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyItems: "center",
    alignItems: "center",
  } as React.CSSProperties,
  icono: {
    marginTop: 5,
    marginLeft: 5,
    cursor: "pointer",
  } as React.CSSProperties,
};

function TextFieldBusqueda(props: TextFieldBusquedaProps) {
  const { textoTooltip = "Buscar", posicionTooltip = "top", className } = props;
  return (
    <>
      <div style={estilos.container} className={className}>
        <TextField {...{ ...props, className: "" }} />
        <Tooltip title={textoTooltip} placement={posicionTooltip} arrow>
          <SearchIcon
            color="primary"
            style={estilos.icono}
            onClick={() => props.setModal({ ...props.modal, open: true })}
          />
        </Tooltip>
      </div>

      {props.modal.open && (
        <ModalBusqueda
          close={() => props.setModal({ ...props.modal, open: false })}
        >
          {props.children}
        </ModalBusqueda>
      )}
    </>
  );
}

export default TextFieldBusqueda;
