import TextField from "@mui/material/TextField";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const componente = styled(TextField)(
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
