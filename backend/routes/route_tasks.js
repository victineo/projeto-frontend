const express = require("express");
const router = express.Router();
const Task = require("../controllers/controller_tasks");

router.post("/add", Task.addTask);

router.get("/tasks", Task.getTasks);

router.put("/tasks/:id", Task.updateTask);

router.delete("/tasks/:id", Task.deleteTask);

module.exports = router;
