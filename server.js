require("dotenv").config();

const express = require("express");

//Express App
const app = express();

//Port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
