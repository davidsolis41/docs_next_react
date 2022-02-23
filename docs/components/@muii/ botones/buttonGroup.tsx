import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function ButtonGroupp() {
  return (
    <ButtonGroup
      aria-label="texto de ayuda a ceguera"
      orientation="horizontal" // horizontal | vertical
      variant="outlined" // outlined | contained | text
      size="large" // small | medium | large
      color="primary"
      disableElevation={false}
      className=""
      tabIndex={1}
      sx={{}}
    >
      <Button>Uno</Button>
      <Button>Dos</Button>
      <Button>Tres</Button>
    </ButtonGroup>
  );
}
