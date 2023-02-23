const User = require("../models/userModel");

//Login
const loginUser = async (req, res) => {
  res.json({ massage: "Login" });
};

//Signup
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, signupUser };
