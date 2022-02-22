import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Div(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="div" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Div;
