import React from "react";
import { ITableInstance } from "../typesTable";

function PaginationTable(props: ITableInstance) {
  return (
    <div className="pagination">
      <button
        onClick={() => props.gotoPage(0)}
        disabled={!props.canPreviousPage}
      >
        {"<<"}
      </button>{" "}
      <button
        onClick={() => props.previousPage()}
        disabled={!props.canPreviousPage}
      >
        {"<"}
      </button>{" "}
      <button onClick={() => props.nextPage()} disabled={!props.canNextPage}>
        {">"}
      </button>{" "}
      <button
        onClick={() => props.gotoPage(props.pageCount - 1)}
        disabled={!props.canNextPage}
      >
        {">>"}
      </button>{" "}
      <span>
        Página{" "}
        <strong>
          {props.state.pageIndex + 1} de {props.pageOptions.length}
        </strong>{" "}
      </span>
      <span>
        | Ir a la página:{" "}
        <input
          type="number"
          defaultValue={props.state.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            props.gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
      <select
        value={props.state.pageSize}
        onChange={(e) => {
          props.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            ver {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PaginationTable;
