import styled from "@mui/material/styles/styled";
import Input from "@mui/material/TextField";

const TextField = styled(Input)(
  ({ theme }) => `
  & .MuiOutlinedInput-input {
    padding: 11px 11px;
  }

  & label {
    top: -5px;
  }

  & .MuiFormHelperText-root {
    margin-top: 1px;
    margin-left: 9px;
    margin-right: 9px;
  }

  &:hover{}
`
);

export default TextField;
