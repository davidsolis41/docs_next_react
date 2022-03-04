import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

function Div(props: StackProps) {
  const { direction = "row" } = props;
  return (
    <Stack {...props} direction={direction} component="div">
      {props.children}
    </Stack>
  );
}

export default Div;
