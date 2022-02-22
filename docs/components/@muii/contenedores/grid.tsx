import Gridd from "@mui/material/Grid";
import React from "react";

function grid() {
  return (
    <Gridd container spacing={2} columns={12}>
      <Gridd item xs={6}>
        <p>xs=6</p>
      </Gridd>
      <Gridd item xs={6}>
        <p>xs=6</p>
      </Gridd>
    </Gridd>
  );
}

export default grid;
