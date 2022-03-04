import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

function Header(props: StackProps) {
  const { direction = "row" } = props;
  return (
    <Stack {...props} direction={direction} component="header">
      {props.children}
    </Stack>
  );
}

export default Header;
