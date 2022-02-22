import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

function stack() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
      className=""
      style={{}}
    ></Stack>
  );
}

export default stack;
