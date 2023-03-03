const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};

//Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const { fullName } = await User.findOne({ email }).select("fullName");

    //Create token
    const token = createToken(user._id);

    res.status(200).json({ fullName, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Signup
const signupUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const user = await User.signup(fullName, email, password);

    //Create token
    const token = createToken(user._id);

    res.status(200).json({ fullName, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, signupUser };
