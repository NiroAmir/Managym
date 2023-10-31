import React, { useEffect } from "react";
import useWorkouts from "../hooks/useWorkouts";
import WorkoutsFeedback from "../components/WorkoutsFeedback";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";

export default function FavWorkouts() {
  const {
    handleGetFavWorkouts,
    handleDeleteWorkout,
    filteredWorkouts,
    error,
    isLoading,
  } = useWorkouts();

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.HOME);
    } else {
      handleGetFavWorkouts();
    }
  }, [user]);

  const handleDelete = async (id) => {
    await handleDeleteWorkout(id);
    await handleGetFavWorkouts();
  };

  return (
    <Container sx={{ mt: 2 }}>
      <PageHeader
        title="Favorite Workouts"
        subtitle="On this page you can find all Workouts from all categories"
      />
      <WorkoutsFeedback
        isLoading={isLoading}
        error={error}
        workouts={filteredWorkouts}
        handleDelete={handleDelete}
      />
    </Container>
  );
}
