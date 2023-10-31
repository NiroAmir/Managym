import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../../users/providers/UserProvider";
import WorkoutForm from "../components/WorkoutForm";
import initialWorkoutForm from "../helpers/initialForms/initialWorkoutForm";
import normalizeWorkout from "../helpers/normalization/normalizeWorkout";
import useWorkouts from "../hooks/useWorkouts";
import workoutSchema from "../models/joi-schema/workoutSchema";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { getAllUsers } from "../../users/services/usersApiService";

export default function CreateWorkoutPage() {
  const { handleCreateWorkout } = useWorkouts();
  const goTo = useNavigate();
  //user - useUser (provider)
  const { user } = useUser();
  //useForm (initialForm,schema,onSubmit)
  const { value, ...rest } = useForm(initialWorkoutForm, workoutSchema, () => {
    handleCreateWorkout({
      ...normalizeWorkout({
        ...value.data,
        title: allUsers?.filter((user) => user.id === selectedUser)[0].name,
      }),
      user_id: selectedUser,
      likes: [],
    });
  });

  const [allUsers, setAllUsers] = useState();
  const [selectedUser, setselectedUser] = useState();
  console.log(allUsers?.filter((user) => user.id === selectedUser));
  useEffect(() => {
    getAllUsers().then((res) => {
      setAllUsers(res);
      setselectedUser(res[0].id);
    });
  }, []);

  if (!user) return goTo(ROUTES.ROOT);
  const handleSelect = (e) => {
    setselectedUser(e.target.value);
  };

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
        selectedUser={selectedUser}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
        updateSelect={handleSelect}
        setData={rest.setData}
        users={allUsers}
      />
    </Container>
  );
}
