import React from "react";
import Stack from "@mui/material/Stack";
import IBasicContainer, {
  align,
  directionn,
  justify,
} from "./@IPropsContainers";

function Header(props: IBasicContainer) {
  const { direction, justifyContent, alignItems, flexWrap, ...otrasProps } =
    props;
  return (
    <Stack
      {...otrasProps}
      component="header"
      direction={directionn(otrasProps)}
      flexWrap={otrasProps.noWrap ? "nowrap" : "wrap"}
      justifyContent={justify(otrasProps)}
      alignItems={align(otrasProps)}
    >
      {props.children}
    </Stack>
  );
}

export default Header;
