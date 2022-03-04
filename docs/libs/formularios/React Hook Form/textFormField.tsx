import React from "react";
import { Controller, Control } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";

export type PropsTexFormField = {
  control: Control<any, object>;
  name: string;
  max?: number;
};

const TextFormField = (props: TextFieldProps & PropsTexFormField) => (
  <Controller
    control={props.control}
    name={props.name}
    render={({
      field: { value, onChange, onBlur, ref, name },
      fieldState: { invalid, isTouched, isDirty, error },
      formState,
    }) => (
      <TextField
        {...props}
        name={name}
        value={value}
        onChange={(e) => {
          if (props.max && String(e.target.value).length > props.max) return;
          onChange(e);
        }}
        onBlur={(e) => {
          onBlur();
          if (props.onBlur) props.onBlur(e);
        }}
        error={Boolean(error)}
        helperText={error ? error.message : props.helperText || undefined}
      />
    )}
  />
);

export default TextFormField;
