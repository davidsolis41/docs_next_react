import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function Stackk() {
  return (
    <Stack
      component="section"
      spacing={{ xs: 2, sm: 4 }}
      direction={{ xs: "column", sm: "row" }} // row | column | row-reverse | column-reverse
      justifyContent="center" // flex-start | center | flex-end | space-between | space-around | space-evenly
      alignItems="center" // flex-start | center | flex-end | stretch | baseline
      divider={<Divider orientation="vertical" flexItem />} // OPCIONAL divisores entre elementos
      className=""
      style={{}}
    ></Stack>
  );
}
