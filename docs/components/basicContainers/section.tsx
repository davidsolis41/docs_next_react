import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Section(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="section" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Section;
