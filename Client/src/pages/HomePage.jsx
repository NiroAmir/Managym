import { CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function HomePage() {
  return (
    <Container>
      <PageHeader
        title="ManaGym Website"
        subtitle="It's all about tracking and consistency"
      />

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={8}
          alignSelf="center"
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/images/homePagePhoto1.png"
            alt="form"
            width="80%"
            style={{ margin: "0 auto" }}
          />
        </Grid>
        <Grid item>
          <Typography>
            Tracking and consistency are vital in workouts. Tracking progress,
            such as weight lifted or distance run, helps set goals and measure
            improvement. Consistency ensures regular training, leading to better
            results and overall health. Together, they form the foundation for
            achieving fitness goals and maintaining a healthy lifestyle.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} alignSelf="center">
          App owner: Nir Amir, Fitness trainer for the last 5 years, and a
          fullstack developer
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/ownerPhoto.jpg" alt="form" width="110%" />
        </Grid>
      </Grid>
    </Container>
  );
}
