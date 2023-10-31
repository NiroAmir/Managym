const validateWorkoutWithJoi = require("./Joi/validateWorkoutWithJoi");

const validator = "Joi";

const validateWorkout = (workout) => {
  if (validator == "Joi") {
    const { error } = validateWorkoutWithJoi(workout);
    if (error) return error.details[0].message;
    return false;
  }
};

module.exports = validateWorkout;
