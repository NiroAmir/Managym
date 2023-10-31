const express = require("express");
const { handleError } = require("../../utils/handleErrors");
const {
  getWorkouts,
  getMyWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  likeWorkout,
  deleteWorkout,
} = require("../models/workoutsAccessDataService");
const normalizeWorkout = require("../helpers/normalizeWorkout");
const validateWorkout = require("../validation/WorkoutValidationService");
const auth = require("../../auth/authService");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const workouts = await getWorkouts();
    return res.send(workouts);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/my-workouts", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const workout = await getMyWorkouts(userId);
    return res.send(workout);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await getWorkout(id);
    return res.send(workout);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    let workout = req.body;
    const user = req.user;

    const errorMessage = validateWorkout(workout);
    if (errorMessage)
      return handleError(res, 400, "Validation error: " + errorMessage);

    workout = await normalizeWorkout(workout, user._id);

    workout = await createWorkout(workout);
    return res.status(201).send(workout);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    let workout = req.body;
    const workoutId = req.params.id;
    const user = req.user;
    console.log(user);
    if (!user.isAdmin) {
      const message =
        "Authorization Error: Only the user who created the workout can update its details";
      return handleError(res, 403, message);
    }

    const errorMessage = validateWorkout(workout);
    if (errorMessage)
      return handleError(res, 400, "Validation error: " + errorMessage);

    workout = await normalizeWorkout(workout);
    workout = await updateWorkout(workoutId, workout);
    return res.send(workout);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const workoutId = req.params.id;
    const userId = req.user._id;
    const workout = await likeWorkout(workoutId, userId);
    return res.send(workout);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const workoutId = req.params.id;
    const user = req.user;
    const workout = await deleteWorkout(workoutId, user);
    return res.send(workout);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;
