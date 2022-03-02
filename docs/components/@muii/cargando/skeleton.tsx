import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function Skeletonn() {
  return (
    <Skeleton
      variant="rectangular" // rectangular | circular | text
      animation="pulse" // pulse | wave | false
      width={210}
      height={118}
      sx={{ bgcolor: "grey.900" }} // OPCIONAL cambiar el color
    />
  );
}

/* ------------------------------- Inferir Tamaño -------------------------------*/
// Podemos pasar el skeleton como hijo condicional

// <Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>

// O Podemos asignarle un hijo a skeleton

// <Skeleton variant="circular"> <Avatar/> </Skeleton>
