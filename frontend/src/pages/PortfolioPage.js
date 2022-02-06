import { Grid, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/Menus/NavBar";
import PortfolioCard from "../components/Cards/PortfolioCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Grid: {
    justifyContent: "center",
  },
}));

const PortfolioPage = (props) => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Typography sx={{textAlign : "center", color: "white"}} variant="h2">PORTFOLIO</Typography>
      <Grid container className={classes.Grid}>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </Grid>
    </div>
  );
};

export default PortfolioPage;
