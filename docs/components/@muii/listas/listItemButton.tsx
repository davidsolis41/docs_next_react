import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import styled from "@mui/material/styles/styled";

export default function ListItemButtonn() {
  const [opcionSeleccioanda, setOpcionSeleccioanda] = React.useState(0);
  // Este componente es usado por ejemplo para las barras laterales
  // puede ir dentro del ListItem cubriendo todos los demas componetes de este
  return (
    <ListItemButton
      selected={opcionSeleccioanda === 1}
      onClick={(event) => {
        setOpcionSeleccioanda(1);
      }}
    >
      {/* childs del ListItem */}
    </ListItemButton>
  );
}

const CustomListItemButtom = styled(ListItemButton)(
  ({ theme }) => `
          padding-left: 10px;
          padding-right: 0px;
          border-radius: 9px;
          font-weight: bold;
          align-items: center;
          &:hover { background-color: #091f40 !important; color: white; },
          .Mui-selected { background-color: #091f40 !important; color: white; }
        `
);
