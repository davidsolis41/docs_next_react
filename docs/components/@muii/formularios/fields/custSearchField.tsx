import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === "light"
      ? alpha(theme.palette.common.black, 0.15)
      : alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? alpha(theme.palette.common.black, 0.25)
        : alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
    //marginRight: theme.spacing(1),
  },
}));

const SearchIconContainer = styled("div")(({ theme }) => ({
  margin: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  zIndex: 2,
  //pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.common.black
      : theme.palette.common.white,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 1.5),
    paddingRight: `calc(1em + ${theme.spacing(2.1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function custSearchField() {
  const busqueda = () => console.log("enviando...");
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <Search>
        <SearchIconContainer onMouseDown={busqueda}>
          <SearchIcon />
        </SearchIconContainer>
        <StyledInputBase
          placeholder="Buscar…"
          type="search"
          onKeyPress={({ charCode }) => charCode === 13 && busqueda()}
        />
      </Search>
    </div>
  );
}
