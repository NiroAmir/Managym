import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import { useUser } from "../../users/providers/UserProvider";
import {
  changeLikeStatus,
  createWorkout,
  deleteWorkout,
  editWorkout,
  getWorkout,
  getWorkouts,
  getMyWorkouts,
} from "../services/workoutApiService";
import { useSearchParams } from "react-router-dom";

export default function useWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [workout, setWorkout] = useState(null);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();
  const [query, setQuery] = useState("");
  const [filteredWorkouts, setFilteredWorkouts] = useState(null);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (workouts) {
      setFilteredWorkouts(
        workouts.filter(
          (workout) =>
            workout.title.toLowerCase().includes(query) ||
            workout.title.toUpperCase().includes(query) ||
            workout.phone.includes(query)
        )
      );
    }
  }, [workouts, query]);

  const requestStatus = (loading, errorMessage, workouts, workout = null) => {
    setLoading(loading);
    setError(errorMessage);
    setWorkouts(workouts);
    setWorkout(workout);
  };

  const handleGetWorkouts = async () => {
    try {
      setLoading(true);
      const workouts = await getWorkouts();
      requestStatus(false, null, workouts);
      snack("success", "All the workouts are here!");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyWorkouts = async () => {
    try {
      setLoading(true);
      const workouts = await getMyWorkouts();
      requestStatus(false, null, workouts);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteWorkout = async (workoutId) => {
    try {
      setLoading(true);
      await deleteWorkout(workoutId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  //handleGetWorkout
  const handleGetWorkout = async (workoutId) => {
    try {
      setLoading(true);
      const workout = await getWorkout(workoutId);
      requestStatus(false, null, null, workout);
      return workout;
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  //handleUpdateWorkout
  const handleUpdateWorkout = async (workoutId, workoutFromClient) => {
    try {
      setLoading(true);
      const workout = await editWorkout(workoutId, workoutFromClient);
      requestStatus(false, null, null, workout);
      snack("success", "The workout has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  //handleLikeWorkout
  const handleLikeWorkout = async (workoutId) => {
    try {
      const workout = await changeLikeStatus(workoutId);
      requestStatus(false, null, workouts, workout);
      snack("success", "The workout has been Liked");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };
  //handleGetFavWorkout
  const handleGetFavWorkouts = async () => {
    try {
      setLoading(true);
      const workouts = await getWorkouts();
      const favWorkouts = workouts.filter((workout) =>
        workout.likes.includes(user.id)
      );
      requestStatus(false, null, favWorkouts);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  //handleCreateWorkout
  const handleCreateWorkout = async (workoutFromClient) => {
    try {
      setLoading(true);
      const workout = await createWorkout(workoutFromClient);
      requestStatus(false, null, null, workout);
      snack("success", "A new workout has been created");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  return {
    workout,
    workouts,
    isLoading,
    error,
    filteredWorkouts,
    setFilteredWorkouts,
    handleGetWorkouts,
    handleGetMyWorkouts,
    handleDeleteWorkout,
    handleGetWorkout,
    handleUpdateWorkout,
    handleCreateWorkout,
    handleGetFavWorkouts,
    handleLikeWorkout,
  };
}
