import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function rating() {
  return (
    <Rating
      name="hover-feedback"
      value={1}
      max={5}
      precision={0.5}
      onChange={(event, newValue) => console.log(newValue)}
      size="medium" // "small" | "large"
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} //OPCIONAL cuando queremos cambiar el icono
      readOnly={false}
      className=""
      sx={{}}
    />
  );
}

export default rating;
