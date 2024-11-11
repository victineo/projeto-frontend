import { useState } from "react";
import "../global.css";
import { Aside } from "../components/Aside/Aside";
import { Task } from "../components/Task/Task";
import { NewTask } from "../components/NewTask/NewTask";

export function HomePage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar React", description: "Estudar conceitos de componentes, hooks e props", isCompleted: false },
    { id: 2, title: "Criar um portfólio", description: "Criar um portfólio com React", isCompleted: false },
  ]);

  function handleCreateNewTask(task) {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: task.title,
      description: task.description,
      isCompleted: false
    };

    if (newTask.title.trim()) {
      setTasks([...tasks, newTask]);
    }
  }
  return (
    <>
      <Aside />
      <div className="container">
        <NewTask onCreate={handleCreateNewTask} />
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
        </div>
      </div>
    </>
  );
}
