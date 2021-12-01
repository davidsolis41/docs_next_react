import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Main(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="main" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Main;
