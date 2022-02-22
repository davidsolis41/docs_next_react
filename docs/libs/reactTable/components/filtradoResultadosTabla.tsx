import React from "react";
import { useAsyncDebounce } from "react-table";
import matchSorter from "match-sorter";

// Primero creamos nuestra funcion de filtrado que devuelve el campo de busqueda
/*function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: ITableInstance) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}

//crearemos estas reglas tambien
function fuzzyTextFilterFn(rows: any, id: any, filterValue: any) {
  return matchSorter(rows, filterValue, {
    keys: [(row: any) => row.values[id]],
  });
}

// esto es para eliminar el filtrado cuando el texto esta vacio
fuzzyTextFilterFn.autoRemove = (val: any) => !val;

const filterTypes = React.useMemo(
  () => ({
    // Add a new fuzzyTextFilterFn filter type.
    fuzzyText: fuzzyTextFilterFn,
    text: (rows: any, id: any, filterValue: any) =>
      rows.filter((row: any) => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
          : true;
      }),
  }),
  []
);*/
/*
useTable(
    {
      columns,
      data,
      filterTypes, 
    },
    useFilters, // useFilters!
)
*/
