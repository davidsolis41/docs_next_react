import React from "react";
import Stack from "@mui/material/Stack";
import { align, directionn, justify } from "./@IPropsContainers";
import type IBasicContainer from "./@IPropsContainers";

const Footer = (props: IBasicContainer) => (
  <Stack
    {...props}
    component="footer"
    direction={directionn(props)}
    flexWrap={props.noWrap ? "nowrap" : "wrap"}
    justifyContent={justify(props)}
    alignItems={align(props)}
  >
    {props.children}
  </Stack>
);

export default Footer;
