import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Ul(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="ul" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Ul;
