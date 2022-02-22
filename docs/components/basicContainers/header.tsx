import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Header(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="header" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Header;
