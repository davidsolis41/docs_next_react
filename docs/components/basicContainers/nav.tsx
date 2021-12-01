import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Nav(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="nav" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Nav;
