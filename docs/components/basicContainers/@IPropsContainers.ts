import { StackProps } from "@mui/material/Stack";

export default interface IBasicContainer extends StackProps {
  flex_row?: boolean;
  flex_column?: boolean;
  flex_row_reverse?: boolean;
  flex_column_reverse?: boolean;
  noWrap?: boolean;
  justify_start?: boolean;
  justify_center?: boolean;
  justify_end?: boolean;
  space_between?: boolean;
  space_around?: boolean;
  space_evenly?: boolean;
  align_start?: boolean;
  align_center?: boolean;
  align_end?: boolean;
  align_baseline?: boolean;
  align_stretch?: boolean;
}

export function align(
  props: IBasicContainer
): "flex-start" | "center" | "flex-end" | "baseline" | "stretch" {
  if (typeof props.align_start !== "undefined") return "flex-start";
  if (typeof props.align_center !== "undefined") return "center";
  if (typeof props.align_end !== "undefined") return "flex-end";
  if (typeof props.align_baseline !== "undefined") return "baseline";
  if (typeof props.align_stretch !== "undefined") return "stretch";
  return "flex-start";
}

export function justify(
  props: IBasicContainer
):
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly" {
  if (typeof props.justify_start !== "undefined") return "flex-start";
  if (typeof props.justify_center !== "undefined") return "center";
  if (typeof props.justify_end !== "undefined") return "flex-end";
  if (typeof props.space_between !== "undefined") return "space-between";
  if (typeof props.space_around !== "undefined") return "space-around";
  if (typeof props.space_evenly !== "undefined") return "space-evenly";
  return "flex-start";
}

export function directionn(
  props: IBasicContainer
): "row" | "row-reverse" | "column" | "column-reverse" {
  if (typeof props.flex_row !== "undefined") return "row";
  if (typeof props.flex_column !== "undefined") return "column";
  if (typeof props.flex_row_reverse !== "undefined") return "row-reverse";
  if (typeof props.flex_column_reverse !== "undefined") return "column-reverse";
  return "row";
}
