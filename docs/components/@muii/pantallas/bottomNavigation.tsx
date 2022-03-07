import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function BottomNavigationn() {
  const [value, setValue] = React.useState("");
  return (
    <BottomNavigation
      showLabels={true} // true | false
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Recientes"
        value="recientes"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favoritos"
        value="favoritos"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Ubicación"
        value="ubicacion"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
