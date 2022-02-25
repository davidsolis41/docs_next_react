import React from "react";
import DialogTitle, { DialogTitleProps } from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function DialogTitlee() {
  return (
    <DialogTitle id="alert-dialog-title">
      <p style={{ fontWeight: "bold" }}>
        ¿Quieres proporcioar acceso a la ubicación?
      </p>
    </DialogTitle>
  );
}

interface CustomDialogTitleProps extends DialogTitleProps {
  onClose: () => void;
}
const CustomDialogTitle = (props: CustomDialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
