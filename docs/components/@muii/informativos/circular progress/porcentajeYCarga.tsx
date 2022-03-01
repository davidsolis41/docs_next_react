import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function PorcentajeYCarga() {
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
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={carga} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.primary"
        >{`${Math.round(carga)}%`}</Typography>
      </Box>
    </Box>
  );
}
