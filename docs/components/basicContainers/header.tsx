import React from "react";
import Stack from "@mui/material/Stack";
import { align, directionn, justify } from "./@IPropsContainers";
import type IBasicContainer from "./@IPropsContainers";

const Header = (props: IBasicContainer) => (
  <Stack
    {...props}
    component="header"
    direction={directionn(props)}
    flexWrap={props.noWrap ? "nowrap" : "wrap"}
    justifyContent={justify(props)}
    alignItems={align(props)}
  >
    {props.children}
  </Stack>
);

export default Header;
