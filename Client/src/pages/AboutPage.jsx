import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader title="About ManaGym" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          Welcome to ManaGym, your ultimate fitness tracking platform for
          trainers and trainees.<br></br>
          At ManaGym, we provide fitness trainers with a powerful tool to create
          customized forms for each trainee, enabling them to track progress
          effectively. Our platform allows trainers to add any category they
          desire, ensuring tracking of each training session.<br></br>
          <br></br>
          Our Mission<br></br> At ManaGym, our mission is to empower fitness
          trainers and trainees by providing them with a user-friendly and
          efficient platform to track progress and achieve fitness goals. We
          believe that personalized tracking is essential for successful
          training programs, and our platform aims to streamline this process,
          making it seamless and hassle-free.<br></br>
          <br></br> How ManaGym Works<br></br>
          Customized Forms<br></br> ManaGym allows fitness trainers to create
          personalized forms for each trainee. Trainers can add various
          categories to capture relevant information such as trainee name, date,
          body weight, fitness exercises performed, weight lifted, and the
          number of reps and sets completed. This customizable approach ensures
          that trainers can tailor the forms to suit their specific training
          programs and goals.<br></br>
          <br></br> Progress Tracking<br></br> With ManaGym, trainers can easily
          monitor the progress of their trainees. By inputting data into the
          forms after each training session, trainers can track improvements in
          body weight, exercise performance, and overall fitness levels over
          time. This data-driven approach helps trainers identify areas for
          improvement and adjust training programs accordingly.<br></br>
          <br></br> Data Analysis<br></br>
          Trainers can utilize this information to evaluate the effectiveness of
          training programs and make data-driven adjustments for optimal
          results.<br></br>
          <br></br> Start Your Fitness Journey Today!<br></br> Whether you're a
          fitness trainer looking to enhance your training programs or a trainee
          aiming to track your progress accurately, ManaGym is here to support
          you. Join our community today and take your fitness journey to the
          next level!
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/exerciseForm.png" alt="form" width="110%" />
        </Grid>
      </Grid>
    </Container>
  );
}
