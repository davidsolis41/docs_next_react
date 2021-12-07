import React from "react";
import { Controller, Control } from "react-hook-form";
import TextF, { TextFieldProps } from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";

export type PropsTexFormField = {
  control: Control<any, object>;
  name: string;
};

const MyTextField = styled(TextF)(
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

const TextFormField = (props: TextFieldProps & PropsTexFormField) => (
  <Controller
    control={props.control}
    name={props.name}
    render={({
      field,
      fieldState: { invalid, isTouched, isDirty, error },
      formState,
    }) => (
      <MyTextField
        {...props}
        {...field}
        error={invalid}
        helperText={isTouched && error ? error.message : props.helperText}
      />
    )}
  />
);

export default TextFormField;
