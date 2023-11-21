const express = require("express");
const app = express();

const connectDB = require("./config/db");
const extracurricularrouter = require("./router/extracurricular");

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(extracurricularrouter);

connectDB();

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
