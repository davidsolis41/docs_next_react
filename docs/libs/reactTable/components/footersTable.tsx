import React from "react";
import { HeaderGroup } from "react-table";

interface IFooters {
  footerGroups: HeaderGroup<any>[];
}

function FootersTable({ footerGroups }: IFooters) {
  return (
    <tfoot>
      {footerGroups.map((group) => (
        <tr {...group.getFooterGroupProps()}>
          {group.headers.map((column) => (
            <td {...column.getFooterProps()}>{column.render("Footer")}</td>
          ))}
        </tr>
      ))}
    </tfoot>
  );
}

export default FootersTable;
