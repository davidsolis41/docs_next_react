import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function acordion() {
  const [expanded, setExpanded] = React.useState(""); // OPCIONAL cuando se controla la expansion
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"} // OPCIONAL para controlar la expansion
        onChange={(e) => setExpanded("panel1")} // OPCIONAL para controlar la expansion
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

export default acordion;
