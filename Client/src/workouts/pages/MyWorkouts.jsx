import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import WorkoutsFeedback from "../components/WorkoutsFeedback";
import useWorkouts from "../hooks/useWorkouts";

export default function MyWorkouts() {
  const {
    isLoading,
    error,
    handleGetMyWorkouts,
    handleDeleteWorkout,
    filteredWorkouts,
  } = useWorkouts();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.HOME);
    } else {
      handleGetMyWorkouts();
    }
  }, [user]);

  const handleDelete = async (id) => {
    await handleDeleteWorkout(id);
    await handleGetMyWorkouts();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Workouts"
          subtitle="On this page you can find all Workouts from all categories"
        />
        <WorkoutsFeedback
          is
          isLoading={isLoading}
          error={error}
          workouts={filteredWorkouts}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
