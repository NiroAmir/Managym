const { default: mongoose } = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidators");

const workoutSchema = new mongoose.Schema({
  title: DEFAULT_VALIDATION,

  phone: {
    type: String,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  bodyWeight: {
    type: Number,
    required: true,
  },
  exercise: { type: Array, required: true },
  createAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  likes: {
    type: Array,
    default: [],
  },
});

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;
