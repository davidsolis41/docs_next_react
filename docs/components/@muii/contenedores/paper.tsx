import React from "react";
import Paper from "@mui/material/Paper";

export default function Paperr() {
  return (
    <Paper
      variant="outlined" // elevation | outlined
      component="section"
      elevation={0} // 0 en adelante
      className=""
      square // OPCIONAL elimina el border radius que tiene
      style={{}}
      sx={{}}
    ></Paper>
  );
}
