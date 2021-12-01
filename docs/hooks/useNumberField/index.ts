import { useState } from "react";
import { IReturnUseField, INumberfield } from "./types";

export default function useNumberfield(options: INumberfield): IReturnUseField {
  const [val, setValor] = useState<number | string>(0);
  const [errores, setErrores] = useState({
    error: false,
    msg: "",
  });

  let { min = 0, max = 1000000000000, required = false } = options;

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
    if (Number(val) < min) {
      setErrores({
        error: true,
        msg: `El valor minimo es: ${min}`,
      });
    }
    if (Number(val) > max) {
      setErrores({
        error: true,
        msg: `El valor maximo es: ${max}`,
      });
    }
    if (required) {
      if (String(val).trim().length < 1 || Number(val) == 0)
        setErrores({
          error: true,
          msg: `El campo es requerido`,
        });
    }
  }

  function setVal(
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | number
      | string
  ) {
    if (typeof e == "number" || typeof e == "string") {
      setValor(Number(e));
      blur();
    } else {
      if (Number(e.target.value) < min || Number(e.target.value) > max) return;
      String(val).trim().length <= 1
        ? setValor(e.target.value)
        : setValor(Number(e.target.value));
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
