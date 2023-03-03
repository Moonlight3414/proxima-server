const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (fullName, email, password) {
  //Validation
  if (!fullName || !email || !password) {
    throw Error("All field is required and cannot be empty!");
  }

  //Check if email is not valid
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email!");
  }

  //Lowercase, Uppercase, Number, Symbol,8+ Chars
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email alrady used!");
  }

  //Encrypt password or hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //Create user
  const user = await this.create({ fullName, email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  //Blank Checking
  if (!email || !password) {
    throw Error("All field is required and cannot be empty!");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email!");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password! Try Again");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
