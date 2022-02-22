import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Footer(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="footer" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Footer;
