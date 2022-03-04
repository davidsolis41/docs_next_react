import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

function Main(props: StackProps) {
  const { direction = "row" } = props;
  return (
    <Stack {...props} direction={direction} component="main">
      {props.children}
    </Stack>
  );
}

export default Main;
