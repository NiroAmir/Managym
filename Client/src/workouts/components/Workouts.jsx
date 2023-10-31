import { Grid, Typography } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import workoutType from "../models/types/workoutType";
import WorkoutComponent from "./workout/WorkoutComponent";
import useWorkouts from "../hooks/useWorkouts";

export default function Workouts({ workouts, handleDelete }) {
  const handleEdit = (id) => {};
  const handleLike = (id) => {};
  const { handleLikeWorkout } = useWorkouts();
  if (workouts.length == 0) {
    return (
      <Typography m={2}>
        "Oops... it seems there are no workouts to display"
      </Typography>
    );
  }

  return (
    <>
      <Grid container>
        {workouts.map((workouts, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <WorkoutComponent
              workout={workouts}
              key={workouts._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleLike={handleLikeWorkout}
            />
          </Grid>
        ))}
      </Grid>
       
    </>
  );
}
Workouts.propTypes = {
  workouts: arrayOf(workoutType),
};
