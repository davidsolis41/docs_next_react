import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

interface CustomPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  resultsLength: number;
}

function CustomPagination({
  page,
  setPage,
  resultsLength,
}: CustomPaginationProps) {
  return (
    <ButtonGroup>
      <Button
        onClick={() => setPage(page - 1)}
        disabled={Boolean(page < 1)}
        variant="contained"
        size="small"
      >
        Atras
      </Button>
      <Button
        onClick={() => setPage(page + 1)}
        disabled={Boolean(resultsLength < 1)}
        variant="contained"
        size="small"
      >
        Siguiente
      </Button>
    </ButtonGroup>
  );
}

export default CustomPagination;
