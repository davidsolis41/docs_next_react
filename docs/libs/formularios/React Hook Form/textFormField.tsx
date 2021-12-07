import React from "react";
import { Controller, Control } from "react-hook-form";
import TextF, { TextFieldProps } from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";

export type PropsTexFormField = {
  control: Control<any, object>;
  name: string;
};

const MyTextField = styled(TextF)(({ theme }) => ``);

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
