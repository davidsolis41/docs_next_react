import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";

export default function Appbarr() {
  return (
    <AppBar
      position="sticky" // static | sticky | fixed | absolute | relative
      color="transparent"
      sx={{ top: 0, left: 0 }} // estilos. Posicionamiento cuando es sticky, fixed o absolute
      //enableColorOnDark // OPCIONAL es para que respete el color que se le indica cuando esta en modo oscuro
    >
      <Toolbar className="" sx={{}} /* esta es la barra del contenido */>
        <IconButton edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Titulo
        </Typography>
        <div style={{ flexGrow: 1 }} /* ocupa el espacio vacio */ />
        <Stack direction="row" alignItems="center">
          {/* Botones de acciones al final */}
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
