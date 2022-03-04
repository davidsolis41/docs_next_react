import Grid from "@mui/material/Grid";
import React from "react";

export default function Gridd() {
  return (
    <Grid
      container
      component="section"
      columns={{ xs: 4, md: 12 }}
      direction={{ xs: "column", sm: "row" }} // row | column | row-reverse | column-reverse
      justifyContent="center" // flex-start | center | flex-end | space-between | space-around | space-evenly
      alignItems="center" // flex-start | center | flex-end | stretch | baseline
      spacing={{ xs: 3, sm: 6, md: 9 }} // aplica espaciado GENERAL
      rowSpacing={{ xs: 2, sm: 4, md: 6 }} // OPCIONAL define el espacio horizontal
      columnSpacing={{ xs: 1, sm: 2, md: 3 }} // OPCIONAL define el espacio vertical
    >
      <Grid
        item
        xs={6}
        md={8} /* xs, sm, md, lg y xl */
        zeroMinWidth // cuando el child tiene propidad noWrap ej. <Tipography noWrap />
        component="article"
      >
        <p>xs=6</p>
      </Grid>
      <Grid item xs={6} md={4} /* xs, sm, md, lg y xl */>
        <p>xs=6</p>
      </Grid>
    </Grid>
  );
}
