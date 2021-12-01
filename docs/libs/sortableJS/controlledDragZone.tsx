import React from "react";
import { ReactSortable } from "react-sortablejs";
import { Item } from "./types";

function ControlledDragZone() {
  const [items, setItems] = React.useState<Item[]>([
    { id: 1, texto: "item 1" },
    { id: 2, texto: "item 2" },
    { id: 3, texto: "item 3" },
  ]);

  return (
    <ReactSortable
      list={items}
      handle=".control-reorder" //clase del controlador del drag en el item
      className="w-100"
      setList={(newList: Item[]) => {
        setItems(newList);
      }}
      ghostClass="hidden" // clase del fantasma opacity: 0;
      chosenClass="" // clase del elemento al arrastrar
      animation={150}
    >
      {items.map((item, i) => (
        <div className="w-10 m-auto" key={`${i}-${item.id}`}>
          {item.texto}
        </div>
      ))}
    </ReactSortable>
  );
}
