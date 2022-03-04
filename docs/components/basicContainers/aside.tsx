import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

function Aside(props: StackProps) {
  const { direction = "row" } = props;
  return (
    <Stack {...props} direction={direction} component="aside">
      {props.children}
    </Stack>
  );
}

export default Aside;
