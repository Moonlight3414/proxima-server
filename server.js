require("dotenv").config();

const express = require("express");
const projectRoutes = require("./routes/projectRoute");
const mongoose = require("mongoose");

//Express App
const app = express();

//Port
const port = process.env.PORT || 4000;

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/projets", projectRoutes);

//Mongodb
mongoose.set("strictQuery", false); //optional
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Listening for request
    app.listen(port, () => {
      console.log(`Connected to moggo Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
