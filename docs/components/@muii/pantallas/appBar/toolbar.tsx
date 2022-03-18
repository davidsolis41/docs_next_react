import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

export default function Toolbarr() {
  return (
    <Toolbar
      variant="regular" // regular | dense (solo para esxritorio) extiende la barra
      className=""
      sx={{}}
    ></Toolbar>
  );
}

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));
