import React from "react";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import BaseContainer from "./BaseContainer";

function Article(props: IComunOpcionsContainers) {
  return (
    <BaseContainer component="article" {...props}>
      {props.children}
    </BaseContainer>
  );
}

export default Article;
