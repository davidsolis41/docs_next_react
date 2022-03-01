import { TextFieldProps } from "@mui/material/TextField";

export interface IModalBusqueda {
  close: () => void;
  pathIconClose?: string;
  width?: string;
  height?: string;
  borderRadius?: number;
  backgroundColor?: string;
  overflowY?: "hidden" | "scroll";
  overflowX?: "hidden" | "scroll";
  children?: any;
}

export type TextFieldBusquedaProps = {
  modal: any;
  setModal: React.Dispatch<React.SetStateAction<any>>;
  textoTooltip?: string;
  posicionTooltip?: "top" | "right" | "bottom" | "left";
  children?: any;
} & TextFieldProps;
