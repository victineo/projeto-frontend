const fs = require("fs");
const path = require("path");

const dataPath = path.resolve(__dirname, "../data/tasks.json");
const dirPath = path.dirname(dataPath);

if (!fs.existsSync(dirPath)) {
  console.log("Criando diretório...");
  fs.mkdirSync(dirPath, { recursive: true });
}

if (!fs.existsSync(dataPath)) {
  console.log("Criando arquivo...");
  fs.writeFileSync(dataPath, "[]");
}

const loadTasks = () => {
  const dirPath = path.dirname(dataPath);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`Diretório não encontrado. Criando diretório: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(dataPath)) {
    console.log(`Arquivo não encontrado. Criando arquivo: ${dataPath}`);
    fs.writeFileSync(dataPath, "[]");
  }

  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
};

const saveTasks = (tasks) => {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
};

const addTask = (task) => {
  const tasks = loadTasks();
  const newTask = {
    id: Date.now(),
    title: task.title,
    description: task.description,
    date: task.date,
  };

  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
};

module.exports = { loadTasks, saveTasks, addTask };
