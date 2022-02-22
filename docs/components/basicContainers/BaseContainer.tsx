import React from "react";
import Paper from "@mui/material/Paper";
import IComunOpcionsContainers from "./@typesContainers/IComunOpcionsContainer";
import useGlobalContext from "../../context/GlobalContext/useGlobalContext";

interface IBaseContainer extends IComunOpcionsContainers {
  component: any;
}

function BaseContainer(props: IBaseContainer) {
  const {
    data: { theme },
  } = useGlobalContext();

  const {
    flexFlow = "row wrap",
    align = "flex-start",
    justify = "flex-start",
  } = props;

  const bgLight = "#ffffff";
  const bgDark = "#000000";

  const estilos: React.CSSProperties = {
    ...props.style,
    borderRadius: 0,
    display: "flex",
    flexFlow: flexFlow,
    justifyContent: justify,
    justifyItems: justify,
    alignItems: align,
    alignContent: align,
    flexGrow: props.grow,
    order: props.order,
    justifySelf: props.justifySelf,
    alignSelf: props.alignSelf,
    flexBasis: props.basis,
  };

  return (
    <Paper
      component={props.component}
      variant="elevation"
      elevation={0}
      sx={{ backgroundColor: theme === "light" ? bgLight : bgDark }}
      className={props.className}
      style={estilos}
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}
    >
      {props.children}
    </Paper>
  );
}

export default BaseContainer;
