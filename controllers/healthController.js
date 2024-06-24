const mongoose = require("mongoose");

//Get Health Check
const healthCheck = async (req, res) => {
  res.status(200).send("OK");
};

module.exports = { healthCheck };
