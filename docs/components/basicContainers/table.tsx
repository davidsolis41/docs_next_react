import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

function Table(props: StackProps) {
  const { direction = "row" } = props;
  return (
    <Stack {...props} direction={direction} component="table">
      {props.children}
    </Stack>
  );
}

export default Table;
