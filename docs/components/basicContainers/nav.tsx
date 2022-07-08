import React from "react";
import Stack from "@mui/material/Stack";
import { align, directionn, justify } from "./@IPropsContainers";
import type IBasicContainer from "./@IPropsContainers";

const Nav = (props: IBasicContainer) => (
  <Stack
    {...props}
    component="nav"
    direction={directionn(props)}
    flexWrap={props.noWrap ? "nowrap" : "wrap"}
    justifyContent={justify(props)}
    alignItems={align(props)}
  >
    {props.children}
  </Stack>
);

export default Nav;
