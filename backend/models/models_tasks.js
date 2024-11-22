const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/tasks.json");

const loadTasks = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, "[]");
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
};

const saveTasks = (tasks) => {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
};

const addTask = (task) => {
  const tasks = loadTasks();
  
  const newTask = {
    title: task.title,
    description: task.description,
    date: task.date
  };
  
  tasks.push(task);
  saveTasks(tasks);
  return task;
};

module.exports = { loadTasks, saveTasks, addTask };
