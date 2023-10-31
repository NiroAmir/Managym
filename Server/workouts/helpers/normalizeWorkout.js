const generateBizNumber = require("./generateBizNumber");

const normalizeWorkout = async (workout, userId) => {
  return {
    ...workout,
    user_id: workout.user_id || userId,
  };
};

module.exports = normalizeWorkout;
