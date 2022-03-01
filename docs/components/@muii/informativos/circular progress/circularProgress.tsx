import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularProgresss() {
  const [carga, setCarga] = React.useState(0);

  React.useEffect(() => {
    const timer: number = window.setInterval(() => {
      setCarga((carga) => (carga < 100 ? carga + 10 : 0));
    }, 500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <CircularProgress
      variant="determinate" // indeterminate (simple) | determinate (se le puede pasar el progreso)
      color="primary"
      value={carga}
      size={40} // OPCIONAL aumentar o reducir tamaño
      // disableShrink // OPCIONAL para eliminar la animacion y optimizar recursos
    />
  );
}
