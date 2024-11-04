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
export async function getTask(id) {
    const task = tasks.find(task => task.id === id);
    return Promise.resolve(task);
}

// Atualizar uma tarefa
export async function updateTask(id, updatedFields) {
    const task = await getTask(id);

    if (task) {
        Object.assign(task, updatedFields);
        return Promise.resolve(task);
    }
    return Promise.resolve(null);
}

// Deletar uma tarefa
export async function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1)[0];
        return Promise.resolve(deletedTask);
    }
    return Promise.resolve(null);
}