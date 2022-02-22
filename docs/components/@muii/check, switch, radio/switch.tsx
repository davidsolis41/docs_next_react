import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function switchh() {
  return (
    <FormControlLabel
      label="Label"
      control={
        <Switch
          checked={true}
          onChange={({ target: { checked } }) => {}}
          color="primary"
          size="medium" // "small"
        />
      }
    />
  );
}

export default switchh;
