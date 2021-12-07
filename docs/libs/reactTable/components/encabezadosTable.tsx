import React from "react";
import { HeaderGroup } from "react-table";

type IEncabezadosTable = {
  headerGroups: HeaderGroup<any>[];
};

function EncabezadosTable({ headerGroups }: IEncabezadosTable) {
  return (
    <thead>
      {headerGroups.map((headerGroup: any) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      ))}
    </thead>
  );
}

export default EncabezadosTable;
