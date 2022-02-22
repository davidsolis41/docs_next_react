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
