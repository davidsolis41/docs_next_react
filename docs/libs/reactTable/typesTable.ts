import { TableInstance } from "react-table";

export interface ITableInstance extends TableInstance<object> {
  page: any[];
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: any;
  pageCount: number;
  gotoPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (size: number) => void;
  state: any;
  selectedFlatRows: any[];
}
