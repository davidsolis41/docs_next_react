import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function badge() {
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
      badgeContent={1}
      max={99}
      color="primary"
      overlap="circular" // "rectangular"
      variant="standard" // "dot"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      aria-label={notificationsLabel(1)}
    >
      <MailIcon />
    </Badge>
  );
}

export default badge;
