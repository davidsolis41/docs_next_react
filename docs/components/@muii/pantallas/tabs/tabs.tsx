import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme, styled } from "@mui/material/styles";
import TabPanel from "./tabPanel";

const SmallTabs = styled(Tabs)(({}) => ({
  minHeight: "35px !important",
  height: "38px !important",
}));

const SmallTab = styled(Tab)(({ theme }) => ({
  minHeight: "35px !important",
  height: "38px !important",
  paddingTop: "5px",
  paddingBottom: "5px",
}));

export default function Tabss() {
  const theme = useTheme();
  const [tabSeleccionado, setTabSeleccionado] = React.useState(0);
  return (
    <>
      <div>
        <Tabs
          aria-label="ayuda a ceguera"
          variant="fullWidth" // standard | scrollable | fullWidth
          scrollButtons="auto" // true | false | auto OPCIONAL para cuando hay muchas opciones
          allowScrollButtonsMobile // OPCIONAL, para mostrar botones de desplazamiento
          orientation="horizontal" // vertical | horizontal
          textColor="primary"
          indicatorColor="secondary"
          centered //OPCIONAL para centrar el contenido
          value={tabSeleccionado}
          onChange={(event, value: number) => {
            setTabSeleccionado(value);
          }}
        >
          <Tab
            aria-label="registrar"
            label="Registrar"
            value={0}
            icon={<FavoriteIcon />} // OPCIONAL
            iconPosition="top" // start | end | top | bottom
            wrapped // OPCIONAL para titulos largos
            disabled // OPCIONAL no se podra seleccionar el tab
          />
          <Tab label="Actualizar" value={1} />
          <Tab label="Busqueda" value={2} />
        </Tabs>
      </div>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={tabSeleccionado}
        onChangeIndex={(value: number) => setTabSeleccionado(value)}
      >
        <TabPanel
          value={tabSeleccionado}
          index={0}
          dir={theme.direction}
        ></TabPanel>
        <TabPanel
          value={tabSeleccionado}
          index={1}
          dir={theme.direction}
        ></TabPanel>
        <TabPanel
          value={tabSeleccionado}
          index={2}
          dir={theme.direction}
        ></TabPanel>
      </SwipeableViews>
    </>
  );
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));
