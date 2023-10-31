const express = require("express");
const workoutsRestController = require("../workouts/routes/workoutsRestController");
const usersRestController = require("../users/routes/UsersRestController");
const { handleError } = require("../utils/handleErrors");
const router = express.Router();

router.use("/workouts", workoutsRestController);
router.use("/users", usersRestController);

router.use((req, res) => {
  handleError(res, 404, "Path not found");
});

module.exports = router;
