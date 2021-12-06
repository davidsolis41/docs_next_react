import React from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";

import EncabezadosTable from "./components/encabezadosTable";
import CeldaEditable from "./components/celdaEditable";
import FootersTable from "./components/footersTable";
import PaginationTable from "./components/paginationTable";
import { ITableInstance } from "./typesTable";

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateData }: any) {
  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn: { id: "id", Cell: CeldaEditable }, // establecemos la propiedad que será el id y la celda que van a renderizar los campos
      updateData, // no forma parte del paquete, pero todas las funciones que pongamos aqui estaran en la instancia
    } as any,
    usePagination,
    useSortBy,
    useGlobalFilter,
    useFilters,
    (hooks) => {}
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    rows,
    page,
    selectedFlatRows, // contenedor de las filas seleccionadas
  } = tableInstance as ITableInstance;

  // Renderizar la tabla
  return (
    <>
      <table {...getTableProps()}>
        <EncabezadosTable headerGroups={headerGroups} />
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, i: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <FootersTable footerGroups={footerGroups} />
        <PaginationTable {...(tableInstance as ITableInstance)} />
      </table>
    </>
  );
}

export default Table;
