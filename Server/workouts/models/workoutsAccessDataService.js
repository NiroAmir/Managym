const { createError } = require("../../utils/handleErrors");
const Workout = require("./mongodb/workout");
const config = require("config");

const DB = config.get("DB");

const createWorkout = async (normalizedWorkout) => {
  if (DB === "MONGODB") {
    try {
      let workout = new Workout(normalizedWorkout);
      await workout.save();
      return Promise.resolve(workout);
    } catch (error) {
      return createError("Mongoose", error);
    }
  } else {
    Promise.resolve("get workouts not in mongodb");
  }
};

const getWorkouts = async () => {
  if (DB === "MONGODB") {
    try {
      const workouts = await Workout.find();
      return Promise.resolve(workouts);
    } catch (error) {
      return createError("Mongoose", error);
    }
  } else {
    Promise.resolve("get workouts not in mongodb");
  }
};

const getWorkout = async (workoutId) => {
  if (DB === "MONGODB") {
    try {
      const workout = await Workout.findById(workoutId);
      if (!workout)
        throw new Error("Could not find this workout in the database");
      return Promise.resolve(workout);
    } catch (error) {
      return createError("Mongoose", error);
    }
  } else {
    Promise.resolve("get workouts not in mongodb");
  }
};

const getMyWorkouts = async (userId) => {
  if (DB === "MONGODB") {
    try {
      let workouts = await Workout.find({ user_id: userId });
      return Promise.resolve(workouts);
    } catch (error) {
      return createError("Mongoose", error);
    }
  } else {
    Promise.resolve("get workouts not in mongodb");
  }
};

const updateWorkout = async (workoutId, normalizedWorkout) => {
  if (DB === "MONGODB") {
    try {
      let workout = await Workout.findByIdAndUpdate(
        workoutId,
        normalizedWorkout,
        {
          new: true,
        }
      );
      if (!workout) {
        throw new Error("The workout with this id didnt found");
      }
      return Promise.resolve(workout);
    } catch (error) {
      return createError("Mongoose", error);
    }
  } else {
    Promise.resolve("get workouts not in mongodb");
  }
};

const likeWorkout = async (workoutId, userId) => {
  if (DB === "MONGODB") {
    try {
      let workout = await Workout.findById(workoutId);
      if (!workout)
        throw new Error(
          "A workout with this ID cannot be found in the database"
        );
      if (workout.likes.includes(userId)) {
        workout = await Workout.findByIdAndUpdate(
          workoutId,
          { $pull: { likes: userId } },
          { new: true }
        );
      } else {
        workout = await Workout.findByIdAndUpdate(
          workoutId,
          { $push: { likes: userId } },
          { new: true }
        );
      }
      return Promise.resolve(workout);
    } catch (error) {
      return createError("Mongoose", error);
    }
  } else {
    Promise.resolve("get workouts not in mongodb");
  }
};

const deleteWorkout = async (workoutId, user) => {
  if (DB === "MONGODB") {
    try {
      let workout = await Workout.findById(workoutId);

      if (!workout)
        throw new Error(
          "A workout with this ID cannot be found in the database"
        );

      if (!user.isAdmin && user._id !== workout.user_id.toString())
        throw new Error(
          "Authorization Error: Only the user who created the workout or admin can delete this workout"
        );
      workout = await Workout.findByIdAndDelete(workoutId);
      return Promise.resolve(workout);
    } catch (error) {
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("workout deleted not in mongodb");
};

exports.deleteWorkout = deleteWorkout;
exports.createWorkout = createWorkout;
exports.getWorkouts = getWorkouts;
exports.getWorkout = getWorkout;
exports.getMyWorkouts = getMyWorkouts;
exports.updateWorkout = updateWorkout;
exports.likeWorkout = likeWorkout;
