import * as React from "react";
import {
  Avatar,
  Button,
  Divider,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoAvatar from "../../Assets/images/CodeDragi.png";
import { NavLink } from "react-router-dom";

export default function RecipeReviewCard() {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345, margin: 1 }}>
        <CardHeader
          avatar={
            <Avatar
              src={LogoAvatar}
              alt="logo"
              sx={{ border: "2px solid #EC3BFF" }}
              aria-label="recipe"
            />
          }
          title="Je suis le post du portfolio 1"
          subheader="6 Février 2022"
        />
        <Divider />
        <Stack
          direction="row"
          spacing={1}
          sx={{ margin: 1, justifyContent: "center" }}
        >
          <Chip label="React Js" />
          <Chip label="Material UI" />
          <Chip label="Graphisme" />
        </Stack>
        <CardMedia
          component="img"
          height="194"
          image="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?s=2048x2048"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            It is a long established
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
          <NavLink to="/portfolio/:id">
            <Button size="small" variant="contained">
              {" "}
              voir plus
            </Button>
          </NavLink>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <Typography>5</Typography>
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
