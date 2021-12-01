export interface ITextfield {
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  regExp?: RegExp;
}

export interface IReturnUseField {
  val: string;
  setVal: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | string
      | number
  ) => void;
  blur: () => void;
  err: boolean;
  msg: string;
  setErr: (value: boolean) => void;
  setMsg: (texto: string) => void;
}
