import React from "react";
import Stack from "@mui/material/Stack";
import IBasicContainer, {
  align,
  directionn,
  justify,
} from "./@IPropsContainers";

function Main(props: IBasicContainer) {
  const { direction, justifyContent, alignItems, flexWrap, ...otrasProps } =
    props;
  return (
    <Stack
      {...otrasProps}
      component="main"
      direction={directionn(otrasProps)}
      flexWrap={otrasProps.noWrap ? "nowrap" : "wrap"}
      justifyContent={justify(otrasProps)}
      alignItems={align(otrasProps)}
    >
      {props.children}
    </Stack>
  );
}

export default Main;
