require("dotenv").config();
require("./database/config");

const Task = require("./models/Task");

const task = new Task();
task.name = "Test task";

require("./index").addNewTask(task);
