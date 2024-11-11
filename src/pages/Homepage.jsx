import { useState } from "react";
import "../global.css";
import { Aside } from "../components/Aside/Aside";
import { Task } from "../components/Task/Task";
import { NewTask } from "../components/NewTask/NewTask";

const tasks = [
  { id: 1, title: "Estudar React", description: "Estudar conceitos de componentes, hooks e props", isCompleted: false },
  { id: 2, title: "Criar um portfólio", description: "Criar um portfólio com React", isCompleted: false },
];

export function HomePage() {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask() {
    event.preventDefault();

    const task = {
      id: Date.now(),
      title: newTask,
      isCompleted: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  }
  return (
    <>
      <Aside />
      <div className="container">
        <NewTask
          onCreate={handleCreateNewTask}
        />
        <div className="taskList">
          {tasks.map(task => {
            return (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
            />
            );
          })}
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
}
