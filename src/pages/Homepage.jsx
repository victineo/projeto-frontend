import { useState } from "react";
import "../global.css";
import { Aside } from "../components/Aside/Aside";
import { Task } from "../components/Task/Task";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";
import { Plus } from "phosphor-react";

export function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event) {
    event.preventDefault();

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  }
  return (
    <>
      <Aside />
      <div className="container">
        <button className="createTaskButton" onClick={handleCreateNewTask}>
          <Plus size={24} />
          Criar nova tarefa
        </button>
        <div className="taskList">
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
}
