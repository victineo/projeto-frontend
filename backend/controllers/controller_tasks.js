const tasksModel = require('../models/model_tasks');

const addTask = (req, res) => {
  const { title, description, date } = req.body;
  console.log('Requisição recebida:', req.body);

  if (!title) {
    console.error('Erro de validação: Campos obrigatórios faltando');
    return res.status(400).json({ error: "Título é obrigatório" });
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

const getTasks = (req, res) => {
  try {
    const tasks = tasksModel.loadTasks(req);
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Erro ao carregar as tarefas:', error.message);
    res.status(500).json({ error: 'Erro ao carregar as tarefas' });
  }
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    console.error('Erro de validação: Campos obrigatórios faltando');
    return res.status(400).json({ error: "Título, descrição e data são obrigatórios" });
  }

  try {
    const tasks = tasksModel.loadTasks();
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    tasks[taskIndex] = { id: parseInt(id), title, description, date };
    tasksModel.saveTasks(tasks);
    res.status(200).json({ message: 'Tarefa atualizada com sucesso', task: tasks[taskIndex] });
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error.message);
    res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
  }
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  try {
    const tasks = tasksModel.loadTasks();
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    tasks.splice(taskIndex, 1);
    tasksModel.saveTasks(tasks);
    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error.message);
    res.status(500).json({ error: 'Erro ao deletar a tarefa' });
  }
};

module.exports = { addTask, getTasks, updateTask, deleteTask };
