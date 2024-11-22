import { useState } from "react";
import { Aside } from "../components/Aside/Aside";
import { Task } from "../components/Task/Task";
import { NewTask } from "../components/NewTask/NewTask";
import { Calendar } from "../components/Calendar/Calendar";
import { CalendarBlank, Trash } from "phosphor-react";
import styles from "./Homepage.module.css";

export function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [selectedTaskTitle, setSelectedTaskTitle] = useState("");
  const [selectedTaskDescription, setSelectedTaskDescription] = useState("");

  function handleCreateNewTask(task) {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: task.title,
      description: task.description,
      isCompleted: false,
    };

    if (newTask.title.trim()) {
      setTasks([...tasks, newTask]);
    }
  };

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  const handleSelectTask = (task) => {
    if (selectedTask && selectedTask.id === task.id) {
      setIsExpanded(!isExpanded);
    } else {
      setIsExpanded(true);
      setSelectedTask(task);
      setSelectedTaskTitle(task.title);
      setSelectedTaskDescription(task.description);
    }
  };

  const handleUpdateTask = (task) => {
    const updatedTask = { ...task };
    updatedTask.title = selectedTaskTitle;
    updatedTask.description = selectedTaskDescription;
    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));
    setTasks(updatedTasks);
  };

  return (
    <>
      <Aside />
      <div className={styles.centerColumn}>
        <NewTask onCreate={handleCreateNewTask} />
        <div className={styles.taskList}>
          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                title={task.title}
                description={task.description}
                onToggleCompleted={() => handleToggleCompleted(task.id)}
                onToggleExpanded={() => handleSelectTask(task)}
                onSelectTask={() => handleSelectTask(task)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            );
          })}
        </div>
        <div>
          <Calendar />
        </div>
      </div>
      <div className={`${styles.rightColumn} ${isExpanded ? styles.rightColumnEntered : styles.rightColumnExited}`}>
        {isExpanded && (
          <div className={`${isExpanded ? styles.rightColumnWrapperEntered : styles.rightColumnWrapperExited}`}>
            <div className={styles.rightColumnScrollableData}>
              <div className={styles.taskInfo}>
                <div className={styles.taskAtribute}>
                  <h3>Título</h3>
                  <input
                    type="text"
                    value={selectedTaskTitle}
                    onChange={(e) => {
                      setSelectedTaskTitle(e.target.value);
                      handleUpdateTask(selectedTask);
                    }}
                  />
                </div>
                <div className={styles.taskAtribute}>
                  <h3>Descrição</h3>
                  <textarea
                    placeholder="Insira uma descrição"
                    value={selectedTaskDescription}
                    onChange={(e) => {
                      setSelectedTaskDescription(e.target.value);
                      handleUpdateTask(selectedTask);
                    }}
                  />
                </div>
              </div>
              <div className={styles.taskActions}>
                <div className={styles.taskAction}>
                  <div className={styles.taskActionIcon}>
                    <CalendarBlank size={24} />
                  </div>
                  <input
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className={styles.rightColumnFooter}>
              <div className={styles.deleteButton} title="Excluir tarefa">
                <Trash size={24} onClick={() => handleDeleteTask(selectedTask.id)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
