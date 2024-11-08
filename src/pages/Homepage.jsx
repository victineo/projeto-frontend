import { useState } from "react";
import "../global.css";
import { Aside } from "../components/Aside/Aside";
import { Task } from "../components/Task/Task";
import { NewTask } from "../components/NewTask/NewTask";

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
        <NewTask />
        <div className="taskList">
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
}
