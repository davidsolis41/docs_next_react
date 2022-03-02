import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

export default function AcordionDetails() {
  return <AccordionDetails></AccordionDetails>;
}

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
