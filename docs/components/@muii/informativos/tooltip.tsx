import React from "react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";

export default function Tooltipp() {
  return (
    <Tooltip
      title="Enviar el Formulario" // TAMBIEN PUEDEN SER COMPONENTES HTML
      placement="top" // top-start | top | top-end | left-start | left | left-end | ETC....
      enterDelay={500} // OPCIONAL tiempo de entrada
      leaveDelay={200} // OPCIONAL tiempo de salida
      TransitionComponent={Fade} // OPCIONAL para cambiar la trancision
      TransitionProps={{ timeout: 600 }} // OPCIONAL para cambiar las props de trancision
      arrow // con flecha
      disableInteractive // OPCIONAL no se puede posicionar sobre el tootip
      followCursor // OPCIONAL para que siga al cursor mientras se mueve
    >
      <Button>Enviar</Button>
    </Tooltip>
  );
}

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});
