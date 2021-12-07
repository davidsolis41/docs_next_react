import React from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { FixedSizeList } from "react-window";
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

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <tr {...row.getRowProps({ style })}>
          {row.cells.map((cell) => (
            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
          ))}
        </tr>
      );
    },
    [prepareRow, rows]
  );

  // Renderizar la tabla
  return (
    <>
      <table {...getTableProps()}>
        <EncabezadosTable headerGroups={headerGroups} />
        <tbody {...getTableBodyProps()}>
          <FixedSizeList
            width={500}
            height={400}
            itemCount={rows.length}
            itemSize={35}
          >
            {RenderRow}
          </FixedSizeList>
        </tbody>
        <FootersTable footerGroups={footerGroups} />
        <PaginationTable {...(tableInstance as ITableInstance)} />
      </table>
    </>
  );
}

export default Table;
