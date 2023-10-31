import React from "react";
import { Route, Routes } from "react-router-dom";
import WorkoutDetailsPage from "../workouts/pages/WorkoutDetailsPage";
import WorkoutPage from "../workouts/pages/WorkoutPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../users/pages/LoginPage";
import SignUpPage from "../users/pages/SignUpPage";
import ROUTES from "./routesModel";

import FavWorkouts from "../workouts/pages/FavWorkouts";
import MyWorkouts from "../workouts/pages/MyWorkouts";
import EditWorkoutPage from "../workouts/pages/EditWorkoutPage";
import CreateWorkoutPage from "../workouts/pages/CreateWorkoutPage";
import EditUserPage from "../users/pages/EditUserPage";
import UserPage from "../users/pages/UserPage";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.WORKOUTS} element={<WorkoutPage />} />
      <Route path={ROUTES.ROOT} element={<WorkoutPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.FAV_WORKOUTS} element={<FavWorkouts />} />
      <Route path={ROUTES.MY_WORKOUTS} element={<MyWorkouts />} />
      <Route
        path={`${ROUTES.WORKOUT_INFO}/:id`}
        element={<WorkoutDetailsPage />}
      />
      <Route
        path={`${ROUTES.EDIT_WORKOUT}/:id`}
        element={<EditWorkoutPage />}
      />
      <Route path={ROUTES.CREATE_WORKOUT} element={<CreateWorkoutPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
