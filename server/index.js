require("dotenv").config();
require("./database/config");

const port = process.env.SERVER_PORT || 5000;

const express = require("express");
const app = express();
const cors = require("cors");
const Task = require("./models/Task");

app.use(cors(), express.urlencoded({ extended: true }), express.json());

app.use("/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

async function addNewTask(task) {
  await task.save();
}

app.post("/task/new", async (req, res) => {
  let task = req.body.task;
  let newTask = new Task();
  newTask.name = task.name;
  res.status(200).send();
});

app.listen(port, console.log(`Listening on port ${port}`));

module.exports = { addNewTask };
