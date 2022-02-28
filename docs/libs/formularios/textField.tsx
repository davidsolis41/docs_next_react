import styled from "@mui/material/styles/styled";
import Input from "@mui/material/TextField";

const TextField = styled(Input)(
  ({ theme, helperText }) => `
    height: ${helperText ? "53px" : "35px"};
    input{
        padding: 5px;
        padding-left: 8px;
    }
    label {
        margin-top: -10px;
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

export default TextField;
