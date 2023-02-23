const User = require("../models/userModel");

//Login
const loginUser = async (req, res) => {
  res.json({ massage: "Login" });
};

//Signup
const signupUser = async (req, res) => {
  res.json({ massage: "Signup" });
};

module.exports = { loginUser, signupUser };
