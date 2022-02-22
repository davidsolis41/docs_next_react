import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Table(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="table" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Table;
