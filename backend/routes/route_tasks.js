const express = require("express");
const router = express.Router();
const Task = require("../controllers/controller_tasks");

router.post("/add", Task.addTask);

router.get("/take", Task.getTasks);

router.put("/update/:id", Task.updateTask);

router.delete("/delete/:id", Task.deleteTask);

module.exports = router;
