import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

interface IProps extends StackProps {
  value: number;
  index: number;
}

function TabPanel(props: IProps) {
  let { children, value, index, style, ...other } = props;
  style = { width: "100%", ...props.style } as React.CSSProperties;

  if (value === index)
    return (
      <Stack role="tabpanel" style={style} {...other}>
        {children}
      </Stack>
    );
  else return <></>;
}

export default TabPanel;
