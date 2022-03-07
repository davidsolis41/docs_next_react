import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";

export default function BreadCrumbss() {
  return (
    <Breadcrumbs
      aria-label="texto de ayuda para ceguera"
      separator={<NavigateNextIcon fontSize="small" />} // para modificar el separador
      maxItems={2} // OPCIONAL para definir los items maximos en la vista
    >
      {/* ------------------------------------------------ */}
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <a href="">Inicio</a>
      </Typography>
      {/* ------------------------------------------------ */}
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        color="text.secondary"
      >
        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <a href="">Core</a>
      </Typography>
      {/* ------------------------------------------------ */}
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        color="text.primary"
      >
        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Pagina
      </Typography>
      {/* ------------------------------------------------ */}
    </Breadcrumbs>
  );
}
