import Task from '../models/task'

let tasks = [];
let currentId = 1;

// Criar tarefa
export async function createTask(title, description, ) {
    const task = new Task(currentId++, title, description, false);
    tasks.push(task);
}

// Listar todas as tarefas
export async function getAllTasks() {
    return Promise.resolve(tasks);
}

// Listar uma tarefa específica
export async function getTask() {
    const task = tasks.find(task => task.id === id);
    return Promise.resolve(task);
}

// Atualizar uma tarefa
export async function updateTask(id, updatedFields) {
    const task = await getTask(id);

    if (task) {
        
    }
}