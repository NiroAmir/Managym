import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import WorkoutForm from "../components/WorkoutForm";
import initialWorkoutForm from "../helpers/initialForms/initialWorkoutForm";
import mapWorkoutToModel from "../helpers/normalization/mapToModel";
import normalizeWorkout from "../helpers/normalization/normalizeWorkout";
import useWorkouts from "../hooks/useWorkouts";
import workoutSchema from "../models/joi-schema/workoutSchema";
import { getAllUsers } from "../../users/services/usersApiService";

export default function EditWorkoutPage() {
  const { id } = useParams();

  const { handleUpdateWorkout, handleGetWorkout, workout } = useWorkouts();
  //user - useUser (provider)
  const { user } = useUser();

  //useForm (initialForm,schema,onSubmit)
  const { value, ...rest } = useForm(initialWorkoutForm, workoutSchema, () => {
    handleUpdateWorkout(workout._id, {
      ...normalizeWorkout({ ...value.data }),
    });
  });

  const [allUsers, setAllUsers] = useState();
  const [selectedUser, setselectedUser] = useState();
  console.log(allUsers?.filter((user) => user.id === selectedUser));

  useEffect(() => {
    handleGetWorkout(id).then((data) => {
      const modelWorkout = mapWorkoutToModel(data);
      rest.setData(modelWorkout);
      getAllUsers().then((res) => {
        setAllUsers(res);
        setselectedUser(data?.user_id);
      });
    });
  }, []);

  /*  useEffect(() => {
    getAllUsers().then((res) => {
      setAllUsers(res);
      setselectedUser(user?._id);
    });
  }, []); */

  if (!user) return <Navigate replace to={ROUTES.WORKOUTS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WorkoutForm
        title="edit workout"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
        prevExercise={workout?.exercise}
        setData={rest.setData}
        users={allUsers}
        selectedUser={selectedUser}
      />
    </Container>
  );
}
