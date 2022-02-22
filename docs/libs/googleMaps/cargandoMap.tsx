import React from "react";
import { ICargandoMap } from "./types";

function CargandoMap({ containerStyle }: ICargandoMap) {
  return (
    <article
      style={{
        ...containerStyle,
        display: "flex",
        flexFlow: "row wrap",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      /*Spinner de carga*/
    </article>
  );
}

export default CargandoMap;
