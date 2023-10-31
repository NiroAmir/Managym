const _ = require("lodash");
const Workout = require("../models/mongodb/workout");
const { createError } = require("../../utils/handleErrors");

const generateBizNumber = async () => {
  try {
    const random = _.random(1_000_000, 9_999_999);
    const Workout = await Workout.findOne({ bizNumber: random });
    if (workout) generateBizNumber();
    return random;
  } catch (error) {
    createError("Generate biz number", error);
  }
};

module.exports = generateBizNumber;
