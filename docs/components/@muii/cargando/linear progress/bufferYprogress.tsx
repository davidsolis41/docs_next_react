import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function BufferYprogress() {
  const [carga, setCarga] = React.useState(0);
  const [buffer, setBuffer] = React.useState(12.5);

  React.useEffect(() => {
    const timer: number = window.setInterval(() => {
      setCarga((cargaAnt) => (cargaAnt < 100 ? cargaAnt + 10 : 0));
      setBuffer((bufferAnt) =>
        bufferAnt < 100 ? bufferAnt + 12.5 : carga < 100 ? 100 : 12.5
      );
    }, 500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return (
    <LinearProgress
      variant="buffer" // buffer | query | indeterminate | determinate
      color="primary"
      value={carga}
      valueBuffer={buffer}
    />
  );
}
