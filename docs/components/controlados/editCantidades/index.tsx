import React from "react";
import { IEditCantidades } from "./types";

function EditCantidades(props: IEditCantidades) {
  let {
    controlled,
    value,
    setValue,
    onChange,
    min = 0,
    max = 100000000000000,
    borderColor = "",
    borderRadius = 3,
    borderStyle = "solid",
    borderWidth = 1,
  } = props;

  let styles = {
    leftButton: {
      cursor: "pointer",
      borderRadius: 0,
      outline: "none",
      borderWidth: `${borderWidth}px`,
      borderColor,
      borderStyle,
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
    } as React.CSSProperties,
    RightButton: {
      cursor: "pointer",
      borderRadius: 0,
      outline: "none",
      borderWidth: `${borderWidth}px`,
      borderColor,
      borderStyle,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
    } as React.CSSProperties,
    input: {
      borderLeft: "0px",
      borderRight: "0px",
      outline: "none",
      borderWidth: `${borderWidth}px`,
      borderRadius: 0,
      borderColor,
      borderStyle,
    } as React.CSSProperties,
  };

  const [inputEdit, setInputEdit] = React.useState<number | string>(value);
  const [resta, setResta] = React.useState(0);
  const [suma, setSuma] = React.useState(0);

  const [counter, setCounter] = React.useState(0);

  function increment() {
    setInputEdit(Number(inputEdit) + 1);
  }

  function decrement() {
    setInputEdit(Number(inputEdit) - 1);
  }

  React.useEffect(() => {
    (async () => {
      if (counter < 1) return;
      if (typeof onChange !== "undefined") {
        await onChange(
          controlled ? Number(value) : Number(inputEdit),
          controlled ? setValue : setInputEdit
        );
      }
    })();
  }, [value, inputEdit]);

  React.useEffect(() => {
    (async () => {
      if (counter < 1) return;
      if (controlled) {
        if (typeof props.onResta !== "undefined") {
          let respRestCont = await props.onResta(Number(value) - 1);

          if (!respRestCont) return;
        }

        if (Number(Number(value) - 1) < Number(min)) return;

        setValue!(Number(value) - 1);
      } else {
        if (typeof props.onResta !== "undefined") {
          let respRestUnCont = await props.onResta(Number(inputEdit) - 1);

          if (!respRestUnCont) return;
        }

        if (Number(Number(inputEdit) - 1) < Number(min)) return;

        decrement();
      }
    })();
  }, [resta]);

  React.useEffect(() => {
    (async () => {
      if (counter < 1) return;
      if (controlled) {
        if (typeof props.onSuma !== "undefined") {
          let respSumCont = await props.onSuma(Number(value) + 1);

          if (!respSumCont) return;
        }

        if (Number(Number(value) + 1) > Number(max)) return;

        setValue!(Number(value) + 1);
      } else {
        if (typeof props.onSuma !== "undefined") {
          let respSumUnCont = await props.onSuma(Number(inputEdit) + 1);

          if (!respSumUnCont) return;
        }

        if (Number(Number(inputEdit) + 1) > Number(max)) return;

        increment();
      }
    })();
  }, [suma]);

  return (
    <div className="w-100 h-99 m-auto flex-row space-around">
      <button
        className="w-23 bold font-size-12 grow-1"
        style={styles.leftButton}
        onClick={() => {
          setCounter(counter + 1);
          let primRest = Math.random() * (100000 - 1) + 1;
          let segRest = Math.random() * (100000 - 1) + 1;
          setResta(primRest * segRest);
        }}
      >
        -
      </button>
      <input
        type="number"
        className={`w-47 text-center font-size-8 grow-2`}
        style={styles.input}
        value={controlled ? value : inputEdit}
        onChange={(e) => {
          setCounter(counter + 1);
          if (Number(e.target.value) > Number(max)) return;
          if (Number(e.target.value) < Number(min)) return;

          if (controlled) setValue!(e.target.value);
          else setInputEdit(e.target.value as any);
        }}
      />
      <button
        className="w-23 bold font-size-10 grow-1"
        style={styles.RightButton}
        onClick={() => {
          setCounter(counter + 1);
          let primSum = Math.random() * (100000 - 1) + 1;
          let segSum = Math.random() * (100000 - 1) + 1;
          setSuma(primSum * segSum);
        }}
      >
        +
      </button>
      <style jsx>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
}

export default EditCantidades;
