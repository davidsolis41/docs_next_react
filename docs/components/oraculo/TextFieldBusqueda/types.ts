import { OutlinedTextFieldProps } from "@mui/material/TextField";

export interface IModal {
  close: () => void;
  pathIconClose?: string;
  width?: string;
  height?: string;
  borderRadius?: number;
  backgroundColor?: string;
  overflowY?: "hidden" | "scroll";
  children?: any;
}

export interface TextFieldBusquedaProps extends OutlinedTextFieldProps {
  modal: any;
  setModal: React.Dispatch<React.SetStateAction<any>>;
  children?: any;
  textoTooltip?: string;
  posicionTooltip?: "top" | "right" | "bottom" | "left";
}
