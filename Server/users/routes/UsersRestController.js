const express = require("express");
const { handleError } = require("../../utils/handleErrors");
//const { generateUserPassword } = require("../helpers/bcrypt");
const normalizeUser = require("../helpers/normalizeUser");
const auth = require("../../auth/authService");
const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  changeUserTraineeStatus,
  deleteUser,
} = require("../models/usersAccessDataService");
const {
  validateUserRegister,
} = require("../validations/userValidationService");
const { generatePassword } = require("../helpers/bcrypt");
const User = require("../models/mongodb/User");
const { rest } = require("lodash");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let user = req.body;
    user = normalizeUser(user);
    user.password = generatePassword(user.password);
    validateUserRegister(user);
    user = await registerUser(user);
    return res.status(201).send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = req.body;
    const token = await loginUser(user);
    return res.send(token);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user.isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin user to see all users in the database"
      );

    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/getallusers", auth, async (req, res) => {
  try {
    // Retrieve all users
    const users = await User.find({});
    console.log(users);

    // Map the users to the desired format
    const allUsers = users.map((user) => {
      return { name: user.name.first + " " + user.name.last, id: user._id };
    });

    // Send the mapped users as a response
    return res.send(allUsers);
  } catch (error) {
    // Handle errors
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let _id = req.user._id;
    let isAdmin = req.user.isAdmin;

    if (_id !== id && !isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin type user or the registered user to see this user details"
      );

    const user = await getUser(id);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let user = req.body;
    user.password = generatePassword(user.password);
    let userInfo = req.user;
    if (!userInfo.isAdmin && userInfo._id != id) {
      return handleError(
        res,
        403,
        "You can not edit user details if its not you or you not admin"
      );
    }
    user = normalizeUser(user);
    user = await updateUser(id, user);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let userInfo = req.user;
    if (!userInfo.isAdmin && userInfo._id != id) {
      return handleError(
        res,
        403,
        "You can not edit user details if its not you or you not admin"
      );
    }
    const user = await changeUserTraineeStatus(id);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let userInfo = req.user;
    if (!userInfo.isAdmin && userInfo._id != id) {
      return handleError(
        res,
        403,
        "You can not delete user if its not you or you not admin"
      );
    }
    const user = await deleteUser(id);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;
