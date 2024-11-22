const express = require("express");
const router = express.Router();
const Task = require("../controllers/controller_tasks");

router.post("/add", Task.addTask);

module.exports = router;
