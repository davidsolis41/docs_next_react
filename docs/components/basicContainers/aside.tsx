import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Aside(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="aside" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Aside;
