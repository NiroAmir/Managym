const jwt = require("jsonwebtoken");
require("dotenv").config();

const key = process.env.SECRET_KEY;

const generateToken = (user) => {
  const { _id, isTrainee, isAdmin, name, image, address, phone, email } = user;

  const token = jwt.sign(
    { _id, isTrainee, isAdmin, name, image, address, phone, email, id: _id },
    key
  );

  return token;
};

const verifyToken = (tokenFromClient) => {
  try {
    const userData = jwt.verify(tokenFromClient, key);

    return userData;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { generateToken, verifyToken };
