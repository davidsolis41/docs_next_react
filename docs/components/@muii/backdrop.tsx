import Backdrop from "@mui/material/Backdrop";
import React from "react";

export default function Backdropp() {
  const [open, setOpen] = React.useState(false);
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: "#fff" }}
      open={open}
      onClick={() => setOpen(false)}
    >
      <div style={{ width: "50%", height: "50%", background: "white" }}></div>
    </Backdrop>
  );
}
