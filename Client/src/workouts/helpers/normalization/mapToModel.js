const mapWorkoutToModel = (workout) => {
  return {
    title: workout.title,
    phone: workout.phone,
    bodyWeight: workout.bodyWeight,
    exercise: workout.exercise,
  };
};

export default mapWorkoutToModel;
