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
  const {
    align_start,
    align_center,
    align_end,
    align_baseline,
    align_stretch,
  } = props;

  if (align_start) return "flex-start";
  if (align_center) return "center";
  if (align_end) return "flex-end";
  if (align_baseline) return "baseline";
  if (align_stretch) return "stretch";
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
  const {
    justify_start,
    justify_center,
    justify_end,
    space_between,
    space_around,
    space_evenly,
  } = props;

  if (justify_start) return "flex-start";
  if (justify_center) return "center";
  if (justify_end) return "flex-end";
  if (space_between) return "space-between";
  if (space_around) return "space-around";
  if (space_evenly) return "space-evenly";
  return "flex-start";
}

export function directionn(
  props: IBasicContainer
): "row" | "row-reverse" | "column" | "column-reverse" {
  if (props.flex_row) return "row";
  if (props.flex_column) return "column";
  if (props.flex_row_reverse) return "row-reverse";
  if (props.flex_column_reverse) return "column-reverse";
  return "row";
}
