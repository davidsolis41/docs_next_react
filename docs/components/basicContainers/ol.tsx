import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Ol(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="ol" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Ol;
