const express = require("express");
const router = express.Router();
const Task = require("../controllers/controller_tasks");

router.post("tasks/add", Task.addTask);

router.get("tasks/get", Task.getTasks);

router.put("tasks/update", Task.updateTask);

router.delete("tasks/delete", Task.deleteTask);

module.exports = router;
