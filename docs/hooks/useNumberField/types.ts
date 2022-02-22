export interface INumberfield {
  max?: number;
  min?: number;
  required?: boolean;
}

export interface IReturnUseField {
  val: number | string;
  setVal: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | number
      | string
  ) => void;
  blur: () => void;
  err: boolean;
  msg: string;
  setErr: (value: boolean) => void;
  setMsg: (texto: string) => void;
}
