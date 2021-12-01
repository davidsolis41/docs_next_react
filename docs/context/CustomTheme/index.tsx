import React from "react";
import {
  createTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import useGlobalContext from "../GlobalContext/useGlobalContext";

interface Iprops {
  children?: any;
}

export default function CustomTheme(props: Iprops) {
  let {
    data: { theme },
  } = useGlobalContext();

  let fuenteTitulos: string = "";
  let fuenteSubTitulos: string = "";
  let fuenteParrafos: string = "";
  let fuenteBotones: string = "";
  let fuenteCaption: string = "";

  let typography: TypographyOptions = {
    htmlFontSize: 16,
    fontFamily: "Roboto, san-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: fuenteTitulos,
      fontWeight: 300,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: fuenteTitulos,
      fontWeight: 300,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: fuenteTitulos,
      fontWeight: 400,
      fontSize: "2.1rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: fuenteTitulos,
      fontWeight: 400,
      fontSize: "1.9rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: fuenteTitulos,
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    subtitle1: {
      fontFamily: fuenteSubTitulos,
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: fuenteSubTitulos,
      fontWeight: 500,
      fontSize: "1.2rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: fuenteParrafos,
      fontWeight: 100,
      fontSize: "1.05rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: fuenteParrafos,
      fontWeight: 100,
      fontSize: "0.9rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: fuenteBotones,
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: fuenteCaption,
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
  };

  let lightTheme: ThemeOptions = {
    palette: {
      mode: "light",
      //colores para elementos
      primary: { main: "", contrastText: "#fff" },
      secondary: { main: "", contrastText: "#fff" },
      info: { main: "", contrastText: "#fff" },
      success: { main: "", contrastText: "#fff" },
      warning: { main: "", contrastText: "#fff" },
      error: { main: "", contrastText: "#fff" },
      common: {
        black: "#000",
        white: "#fff",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        default: "#fafafa",
        paper: "#fff",
      },
    },
    typography,
  };

  let darkTheme: ThemeOptions = {
    palette: {
      mode: "dark",
      //colores para elementos
      primary: { main: "#000", contrastText: "#fff" },
      secondary: { main: "#000", contrastText: "#fff" },
      info: { main: "#000", contrastText: "#fff" },
      success: { main: "#000", contrastText: "#fff" },
      warning: { main: "#000", contrastText: "#fff" },
      error: { main: "#000", contrastText: "#fff" },
      common: {
        black: "#000",
        white: "#fff",
      },
      text: {
        //colores para textos
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255,, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        default: "#303030",
        paper: "#424242",
      },
    },
    typography,
  };

  let themaSeleccionado: ThemeOptions =
    theme == "light" ? lightTheme : theme == "dark" ? darkTheme : lightTheme;

  const customTheme: Theme = createTheme(themaSeleccionado);

  return <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>;
}
