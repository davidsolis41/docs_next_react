import React from "react";
import { ReactSortable } from "react-sortablejs";
import { IReorderList } from "./types";

function ReorderList(props: IReorderList) {
  const {
    items,
    setItems,
    onChange,
    ghostClass = "hidden",
    chosenClass,
  } = props;
  return (
    <ReactSortable
      list={items}
      className={props.className}
      setList={async (newList: any[]) => {
        if (onChange) {
          await onChange(newList);
          return;
        }
        setItems(newList);
      }}
      ghostClass={ghostClass} // clase del fantasma opacity: 0;
      chosenClass={chosenClass} // clase del elemento al arrastrar
      animation={150}
    >
      {props.children}
    </ReactSortable>
  );
}
