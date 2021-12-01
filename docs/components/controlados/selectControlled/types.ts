export interface IPropsSelect {
  label: string;
  controller: IControlled;
  arrayOpt: any[];
  nameOpt: string;
  valueOpt: string;
  variant?: "standard" | "filled" | "outlined";
  defaultHelper?: string;
  required?: boolean;
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning";
  id?: string;
  labelId?: string;
  children?: any;
  classNameFC?: string;
  classNameSL?: string;
  styleFormControl?: any;
  styleSelect?: any;
}

export interface IControlled {
  val: string | number;
  setVal: (e: any) => void;
  blur: () => void;
  err: boolean;
  msg: string;
}
