import { Card, CardActionArea } from "@mui/material";
import React from "react";
import WorkoutBody from "./WorkoutBody";
import WorkoutActionBar from "./WorkoutActionBar";
import workoutType from "../../models/types/workoutType";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function WorkoutComponent({
  workout,
  handleDelete,
  handleLike,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardActionArea
          onClick={() => navigate(`${ROUTES.WORKOUT_INFO}/${workout._id}`)}
        >
          <WorkoutBody
            title={workout.title}
            date={workout.createAt}
            phone={workout.phone}
            bodyWeight={workout.bodyWeight}
            exercise={workout.exercise}
          />
        </CardActionArea>
        <WorkoutActionBar
          id={workout._id}
          user_id={workout.user_id}
          handleDelete={handleDelete}
          handleLike={handleLike}
          workoutLikes={workout.likes}
        />
      </Card>
    </>
  );
}

WorkoutComponent.propType = {
  workout: workoutType.isRequired,
  handleDelete: func,
  handleEdit: func,
  handleLike: func,
};
