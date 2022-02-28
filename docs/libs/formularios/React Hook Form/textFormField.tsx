import React from "react";
import { Controller, Control } from "react-hook-form";
import TextF, { TextFieldProps } from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";

export type PropsTexFormField = {
  control: Control<any, object>;
  name: string;
  max?: number;
};

const MyTextField = styled(TextF)(
  ({ theme }) => `
  & .MuiOutlinedInput-input {
    padding: 9px 10px;
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
      field: { value, onChange, onBlur, ref, name },
      fieldState: { invalid, isTouched, isDirty, error },
      formState,
    }) => (
      <MyTextField
        {...props}
        name={name}
        error={Boolean(error)}
        helperText={error ? error.message : props.helperText || undefined}
        value={value}
        onChange={(e) => {
          if (props.max && String(e.target.value).length > props.max) return;
          onChange(e);
        }}
        onBlur={(e) => {
          onBlur();
          if (props.onBlur) props.onBlur(e);
        }}
      />
    )}
  />
);

export default TextFormField;
