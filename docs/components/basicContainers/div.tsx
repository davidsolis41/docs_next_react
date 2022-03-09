import React from "react";
import Stack from "@mui/material/Stack";
import IBasicContainer, {
  align,
  directionn,
  justify,
} from "./@IPropsContainers";

function Div(props: IBasicContainer) {
  const { direction, justifyContent, alignItems, flexWrap, ...otrasProps } =
    props;
  return (
    <Stack
      {...otrasProps}
      component="div"
      direction={directionn(otrasProps)}
      flexWrap={otrasProps.noWrap ? "nowrap" : "wrap"}
      justifyContent={justify(otrasProps)}
      alignItems={align(otrasProps)}
    >
      {props.children}
    </Stack>
  );
}

export default Div;
