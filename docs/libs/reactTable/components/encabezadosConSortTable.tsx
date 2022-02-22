import React from "react";
import { HeaderGroup } from "react-table";

type IEncabezadosTable = {
  headerGroups: HeaderGroup<any>[];
};

function EncabezadosConSortTable({ headerGroups }: IEncabezadosTable) {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}{" "}
              <span>
                {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}

export default EncabezadosConSortTable;
