import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";

export default function Badgee() {
  const [countNofication, setCountNofication] = React.useState(1);

  function notificationsLabel(count: number) {
    if (count === 0) {
      return "No hay notificaciones";
    }
    if (count > 99) {
      return "Hay mas de 99 notificaciones";
    }
    return `${count} notificaciones`;
  }

  return (
    <Badge
      badgeContent={countNofication} // tambien pueden ser componentes o texto
      max={99}
      overlap="circular" // circular | rectangular
      variant="standard" // standard | dot
      color="primary"
      anchorOrigin={{
        vertical: "top", // top | bottom
        horizontal: "right", // left | right
      }}
      aria-label={notificationsLabel(countNofication)}
      invisible={countNofication === 0} // para ocultar el bandge
      showZero // para mostrarlo cuando es cero
    >
      <MailIcon />
    </Badge>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
