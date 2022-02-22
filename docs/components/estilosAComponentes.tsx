import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const componente = styled(TextField)(
  ({ theme }) => `
  
    background-color: ${theme.palette.primary};
    transition: ${theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard,
    })};
    
    &:hover {
        background-color: ${theme.palette.secondary};
        transform: scale(1.3);
    }
`
);

export default componente;
