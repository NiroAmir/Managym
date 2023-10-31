const normalizeWorkout = (workout) => {
  return {
    title: workout.title,
    bodyWeight: workout.bodyWeight,
    phone: workout.phone,
    exercise: workout.exercise,
    likes: [],
  };
};

export default normalizeWorkout;
