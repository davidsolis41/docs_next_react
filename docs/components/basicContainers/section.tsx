import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

function Section(props: StackProps) {
  const { direction = "row" } = props;
  return (
    <Stack {...props} direction={direction} component="section">
      {props.children}
    </Stack>
  );
}

export default Section;
