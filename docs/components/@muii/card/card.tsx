import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MoreIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Cardd() {
  return (
    <Card
      variant="elevation" // elevation | outlined
      elevation={1}
      sx={{}}
    >
      <CardActionArea>
        {/* HEADER */}
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "blue" }}>D</Avatar>}
          action={
            <IconButton>
              <MoreIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        {/* IMAGEN */}
        <CardMedia
          component="img"
          alt="alt"
          image="/static/myimg.jpg"
          height="140"
        />
        {/* CONTENIDO */}
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Datos del día
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* ACCIONES */}
      <CardActions>
        <Button size="small">ver más</Button>
      </CardActions>
    </Card>
  );
}
