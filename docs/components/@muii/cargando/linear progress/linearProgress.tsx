import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export default function LinearProgresss() {
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
    <LinearProgress
      variant="determinate" // indeterminate (simple) | determinate (se le puede pasar el progreso) | query (simple al revés)
      color="primary"
      value={carga}
    />
  );
}

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
