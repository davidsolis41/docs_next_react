import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function buttonGroup() {
  return (
    <ButtonGroup
      orientation="horizontal"
      variant="outlined" // "contained" | "text"
      size="medium"
      color="primary"
      disableElevation={false}
      aria-label="texto de ayuda a ceguera"
      className=""
      sx={{}}
    >
      <Button>Uno</Button>
      <Button>Dos</Button>
      <Button>Tres</Button>
    </ButtonGroup>
  );
}

export default buttonGroup;
