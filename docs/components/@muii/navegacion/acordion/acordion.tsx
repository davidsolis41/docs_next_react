import React from "react";
import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

export default function Acordionn() {
  const [expanded, setExpanded] = React.useState(""); // OPCIONAL cuando se controla la expansion
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"} // OPCIONAL para controlar la expansion
        onChange={(e) => setExpanded("panel1")} // OPCIONAL para controlar la expansion
        // disabled // OPCIONAL para deshabilitar el acordion
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{}}
        >
          <p>titulo de la opcion</p>
        </AccordionSummary>
        <AccordionDetails sx={{}}>
          <p>detalle que se muestra cuendo esta expandida la opcion</p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e) => setExpanded("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{}}
        >
          <p>titulo de la opcion</p>
        </AccordionSummary>
        <AccordionDetails sx={{}}>
          <p>detalle que se muestra cuendo esta expandida la opcion</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const CustomAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
