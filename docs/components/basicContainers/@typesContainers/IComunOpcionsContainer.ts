export default interface IComunOpcionsContainers {
  flexFlow?:
    | "row wrap"
    | "column wrap"
    | "row-reverse wrap"
    | "column-reverse wrap"
    | "row nowrap"
    | "column nowrap"
    | "row-reverse nowrap"
    | "column-reverse nowrap";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  className?: string;
  style?: React.CSSProperties;
  justifySelf?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignSelf?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  grow?: number;
  order?: number;
  basis?: string;
  onClick?: (e: React.MouseEvent<any>) => void;
  onDoubleClick?: (e: any) => void;
  onFocus?: (e: React.FocusEventHandler<any>) => any;
  onBlur?: (e: React.FocusEventHandler<any>) => any;
  onDrag?: (e: React.DragEventHandler<any>) => any;
  onDragEnd?: (e: React.DragEventHandler<any>) => any;
  children?: any;
}
