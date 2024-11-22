const tasksModel = require("../models/model_tasks");

const addTask = (req, res) => {
  const { title, description } = req.body;
  try {
    const task = tasksModel.addTask({ id: Date.now(), title, description });
    res.status(201).json({ message: "Tarefa adicionada com sucesso", task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addTask };
