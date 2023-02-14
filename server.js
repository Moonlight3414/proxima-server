require("dotenv").config();

const express = require("express");
const projectRoutes = require("./routes/projectRoute");

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
