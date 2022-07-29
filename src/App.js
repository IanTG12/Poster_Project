//package everything that will need to be rendered into App() and export to index.js

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Container, Grid, Typography, Grow } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import testImage from "./Images/cone.png";

import { getCampaigns } from "./Actions/campaigns";

import Navbar from "./Components/Navbar/navbar";

//TODO - Import other components that use routes? maybe rendereing?
//>> import styles if needed

const App = () => {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          test
        </Typography>
        <img src={testImage} alt="icon" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          ></Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
