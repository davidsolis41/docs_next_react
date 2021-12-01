import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import { IPropsSelect } from "./types";

export default function SelectControlled(props: IPropsSelect) {
  let defautlId = Math.random() * (1 - 3000000) + 1;
  let defaultLabelId = Math.random() * (1 - 45671242) + 1;
  let { nameOpt: name, valueOpt: value } = props;

  let options = props.arrayOpt.map((opt: any, i: number) => (
    <MenuItem key={`${i}${opt[name]}`} value={opt[value]}>
      {opt[name]}
    </MenuItem>
  ));

  options.unshift(
    <MenuItem key={`${Math.random() * (1 - 1000000) + 1}`} value="">
      <em>None</em>
    </MenuItem>
  );

  return (
    <FormControl
      variant={props.variant || "standard"}
      style={props.styleFormControl}
      className={props.classNameFC}
      required={props.required}
      error={props.controller.err}
    >
      <InputLabel id={props.labelId || String(defaultLabelId)}>
        {props.label}
      </InputLabel>
      <Select
        label={props.label}
        style={props.styleSelect}
        className={props.classNameSL}
        color={props.color || "primary"}
        labelId={props.labelId || String(defaultLabelId)}
        id={props.id || String(defautlId)}
        value={props.controller.val}
        onBlur={() => props.controller.blur()}
        onChange={(e) => props.controller.setVal(e.target.value)}
      >
        {options}
      </Select>
      <FormHelperText>
        {props.controller.err ? props.controller.msg : props.defaultHelper}
      </FormHelperText>
    </FormControl>
  );
}
