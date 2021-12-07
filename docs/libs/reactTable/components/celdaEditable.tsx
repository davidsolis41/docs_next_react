import React from "react";
import { Cell } from "react-table";

interface IPropsCeldaEditable extends Cell {
  updateData: (
    idItem: any,
    value: any,
    setValue: React.Dispatch<any>
  ) => Promise<void>;
}

function CeldaEditable({
  value: initialValue,
  row: { values },
  updateData, // esta es la funcion que se le ha pasado a la instancia de tabla
}: IPropsCeldaEditable) {
  // Estado para la celda, para mantener y actualizar su valor
  const [value, setValue] = React.useState<any>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Actualizamos la información en nuestra api
  const onBlur = async () => {
    await updateData(values.id, value, setValue);
  };

  // seteamos el valor inicial, si es proporcionado
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <input value={value} onChange={onChange} onBlur={onBlur} />;
}

export default CeldaEditable;
