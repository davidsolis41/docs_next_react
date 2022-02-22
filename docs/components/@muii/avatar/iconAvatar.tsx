import React from "react";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";

function iconAvatar() {
  return (
    <Avatar
      variant="circular" // "square" "rounded"
      sx={{ bgcolor: "green", width: 50, height: 50 }}
    >
      <AssignmentIcon sx={{ fontSize: "1.2em", color: "white" }} />
    </Avatar>
  );
}

export default iconAvatar;
