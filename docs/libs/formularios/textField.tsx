import styled from "@mui/material/styles/styled";
import Input from "@mui/material/TextField";

export const OutlinedTextField = styled(Input)(
  ({ theme, helperText, size }) => `
    height: ${helperText ? "55px" : "30px"};
    input{
      padding: 5px;
      padding-left: 8px;
    }
    label {
      margin-top: ${size === "small" ? "-4px" : "-10px"};
    }
    .MuiInputLabel-outlined .Mui-focused{
      margin-top: 0px;
      margin-bottom: 3px;
    }
    .MuiInputLabel-shrink {
      margin-top: 0px;
    }
    .MuiFormHelperText-root{
      margin-left: 5px;
      margin-right: 5px;
      font-size: 0.75rem;
    }
`
);
