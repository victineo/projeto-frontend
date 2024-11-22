const tasksModel = require('../models/model_tasks');

console.log("Caminho Absoluto:", require.resolve("../models/model_tasks"));

const addTask = (req, res) => {
  const { title, description, date } = req.body;
  console.log('Requisição recebida:', req.body);

  if (!title || !description || !date) {
      console.error('Erro de validação: Campos obrigatórios faltando');
      return res.status(400).json({ error: "Título, descrição e data são obrigatórios" });
  }

  try {
      const task = tasksModel.addTask({ title, description, date });
      console.log('Tarefa criada com sucesso:', task);
      res.status(201).json({ message: "Tarefa adicionada com sucesso", task });
  } catch (error) {
      console.error('Erro ao criar tarefa:', error.message);
      res.status(400).json({ error: error.message });
  }
};


module.exports = { addTask };
