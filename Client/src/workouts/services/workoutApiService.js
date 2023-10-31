import axios from "axios";
const apiUrl = "http://localhost:8181";
export const getWorkouts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/workouts`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyWorkouts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/workouts/my-workouts`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteWorkout = async (workoutId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/workouts/${workoutId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getWorkout = async (workoutId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/workouts/${workoutId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createWorkout = async (workout) => {
  try {
    const { data } = await axios.post(`${apiUrl}/workouts/`, workout);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editWorkout = async (workoutId, normalaizedWorkout) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/workouts/${workoutId}`,
      normalaizedWorkout
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (workoutId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/workouts/${workoutId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
