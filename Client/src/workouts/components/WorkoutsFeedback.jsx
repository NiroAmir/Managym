import { Typography } from "@mui/material";
import React from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Workouts from "./Workouts";

export default function WorkoutsFeedback({
  isLoading,
  workouts,
  error,
  handleDelete,
}) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (workouts && workouts.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no workouts to display
      </Typography>
    );
  }
  if (workouts)
    return <Workouts workouts={workouts} handleDelete={handleDelete} />;
  return null;
}
