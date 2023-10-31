import { Container, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useWorkouts from "../hooks/useWorkouts";
import Maps from "../components/workout/Maps";

export default function WorkoutDetailsPage() {
  const { id } = useParams();
  const { workout, handleGetWorkout } = useWorkouts();
  useEffect(() => {
    handleGetWorkout(id);
  }, []);

  return (
    <Container>
      <PageHeader
        title="Workout details"
        subtitle="Here you can find all the details about specific workout"
      />
      <Container>
        <Typography>
          Trainee Name : {workout?.title} {workout?.subtitle}
        </Typography>
        <Typography>Trainee phone : {workout?.phone}</Typography>
        {workout?.exercise?.map((ex) => (
          <Typography variant="body1" color="initial">
            {ex}
          </Typography>
        ))}
        <Box
          sx={{
            width: "50vw",
            height: "40vh", // Adjust as needed
            margin: "2vh auto",
          }}
        ></Box>
      </Container>
    </Container>
  );
}
