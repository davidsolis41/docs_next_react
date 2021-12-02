import React from "react";
import DesktopDateRangePicker from "@mui/lab/DesktopDateRangePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

function dateRangePickerDesktop() {
  const [value, setValue] = React.useState([null, null]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateRangePicker
        startText="Desktop start"
        value={value as any}
        onChange={(newValue) => {
          setValue(newValue as any);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> A </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}

export default dateRangePickerDesktop;
