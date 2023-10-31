import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useWorkouts from "../hooks/useWorkouts";
import WorkoutsFeedback from "../components/WorkoutsFeedback";
import CreateWorkoutButton from "../components/CreateWorkoutButton";
import { useUser } from "../../users/providers/UserProvider";
import { SignalCellularNull } from "@mui/icons-material";

export default function WorkoutPage() {
  const {
    isLoading,
    error,
    handleGetWorkouts,
    setFilteredWorkouts,
    handleDeleteWorkout,
    filteredWorkouts,
  } = useWorkouts();

  const { user } = useUser();

  useEffect(() => {
    handleGetWorkouts();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteWorkout(id);
    handleGetWorkouts();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Workouts"
          subtitle="On this page you can find all Workouts from all categories"
        />
        <WorkoutsFeedback
          isLoading={isLoading}
          error={error}
          workouts={filteredWorkouts}
          handleDelete={handleDelete}
        />
      </Container>
      {user?.isAdmin ? <CreateWorkoutButton /> : null}
    </div>
  );
}
