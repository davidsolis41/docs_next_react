import React from "react";
import { ReactSortable } from "react-sortablejs";
import { Item } from "./types";

function SharedLists() {
  const [items, setItems] = React.useState<Item[]>([
    { id: 1, texto: "item 1" },
    { id: 2, texto: "item 2" },
    { id: 3, texto: "item 3" },
  ]);

  const [objetos, setObjetos] = React.useState<Item[]>([
    { id: 1, texto: "objeto 1" },
    { id: 2, texto: "objeto 2" },
    { id: 3, texto: "objeto 3" },
  ]);

  return (
    <section className="w-100 flex-row space-around">
      <article className="basis-49">
        <ReactSortable
          list={items}
          className="w-100"
          setList={(newList: Item[]) => {
            setItems(newList);
          }}
          ghostClass="hidden"
          chosenClass=""
          animation={150}
          group="compartidas"
        >
          {items.map((item, i) => (
            <div className="w-10 m-auto" key={`${i}-${item.id}`}>
              {item.texto}
            </div>
          ))}
        </ReactSortable>
      </article>

      <article className="basis-49">
        <ReactSortable
          list={objetos}
          className="w-100"
          setList={(newList: Item[]) => {
            setObjetos(newList);
          }}
          ghostClass="hidden"
          chosenClass=""
          animation={150}
          group="compartidas"
        >
          {objetos.map((item, i) => (
            <div className="w-10 m-auto bg-blue" key={`${i}-${item.texto}`}>
              {item.texto}
            </div>
          ))}
        </ReactSortable>
      </article>
    </section>
  );
}
