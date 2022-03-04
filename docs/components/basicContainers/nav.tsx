import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

function Nav(props: StackProps) {
  const { direction = "row" } = props;
  return (
    <Stack {...props} direction={direction} component="nav">
      {props.children}
    </Stack>
  );
}

export default Nav;
