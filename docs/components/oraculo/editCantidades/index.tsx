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

  const styles = {
    leftButton: {
      cursor: "pointer",
      borderRadius: 0,
      outline: "none",
      borderWidth: `${borderWidth}px`,
      borderColor,
      borderStyle,
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      width: "23%",
      fontWeight: "bold",
      fontSize: "1.2em",
      flexGrow: 1,
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
      width: "23%",
      fontWeight: "bold",
      fontSize: "1em",
      flexGrow: 1,
    } as React.CSSProperties,
    input: {
      borderLeft: "0px",
      borderRight: "0px",
      outline: "none",
      borderWidth: `${borderWidth}px`,
      borderRadius: 0,
      borderColor,
      borderStyle,
      width: "47%",
      textAlign: "center",
      fontSize: "0.8em",
      flexGrow: 2,
    } as React.CSSProperties,
  };

  const styleContainer: React.CSSProperties = {
    width: "100%",
    height: "99%",
    margin: "0px auto",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
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
    <div style={styleContainer}>
      <button
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
