import { useState } from "react";
import { ITextfield, IReturnUseField } from "./types";

export default function useTextfield(options: ITextfield): IReturnUseField {
  const [val, setValor] = useState<string>("");
  const [errores, setErrores] = useState({
    error: false,
    msg: "",
  });

  let {
    minLength = 0,
    maxLength = 1000000,
    required = false,
    regExp,
  } = options;

  function setErr(value: boolean) {
    setErrores({ ...errores, error: value });
  }

  function setMsg(texto: string) {
    setErrores({ ...errores, msg: texto });
  }

  function blur() {
    if (true) {
      setErrores({
        error: false,
        msg: "",
      });
    }
    if (val.trim().length < minLength) {
      setErrores({
        error: true,
        msg: `El minimo de caracteres es: ${minLength}`,
      });
    }
    if (val.trim().length > maxLength) {
      setErrores({
        error: true,
        msg: `El maximo de caracteres es: ${maxLength}`,
      });
    }
    if (required) {
      val.trim().length == 0 &&
        setErrores({
          error: true,
          msg: `El campo es requerido`,
        });
    }
  }

  function setVal(
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | string
      | number
  ) {
    if (typeof e == "string" || typeof e == "number") {
      if (regExp && !regExp.test(String(e))) return;
      setValor(String(e));
      blur();
    } else {
      if (regExp && !regExp.test(e.target.value)) return;
      if (String(e.target.value).trim().length > maxLength) return;
      setValor(String(e.target.value));
      blur();
    }
  }

  return {
    val,
    setVal,
    blur,
    err: errores.error,
    msg: errores.msg,
    setErr,
    setMsg,
  };
}
