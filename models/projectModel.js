const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tech: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    dev: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
