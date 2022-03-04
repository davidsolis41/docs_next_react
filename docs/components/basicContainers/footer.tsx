import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

function Footer(props: StackProps) {
  const { direction = "row" } = props;
  return (
    <Stack {...props} direction={direction} component="footer">
      {props.children}
    </Stack>
  );
}

export default Footer;
