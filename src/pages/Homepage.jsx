import { useState, useEffect } from "react";
import { Aside } from "../components/Aside/Aside";
import { Task } from "../components/Task/Task";
import { NewTask } from "../components/NewTask/NewTask";
import { Calendar } from "../components/Calendar/Calendar";
import { CalendarBlank, Trash } from "phosphor-react";
import axios from "axios";
import styles from "./Homepage.module.css";

export function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [selectedTaskTitle, setSelectedTaskTitle] = useState("");
  const [selectedTaskDescription, setSelectedTaskDescription] = useState("");
  const [selectedTaskDate, setSelectedTaskDate] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/tasks/take");
      setTasks(response.data);
    } catch (error) {
      console.error(
        error.response
          ? `Erro ao buscar tarefas: ${error.response.data.error}`
          : "Erro desconhecido ao buscar tarefas"
      );
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  async function handleDeleteTask(taskId) {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/delete/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error(
        error.response
          ? `Erro do servidor: ${error.response.data.error}`
          : "Erro desconhecido"
      );
    }
  }

  const handleToggleCompleted = async (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);

    if (taskToUpdate) {
      try {
        const updatedTask = { ...taskToUpdate, isCompleted: !taskToUpdate.isCompleted };
        await axios.put(`http://localhost:8000/api/tasks/update/${taskId}`, updatedTask);

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? updatedTask : task
          )
        );
      } catch (error) {
        console.error(
          error.response
            ? `Erro ao atualizar tarefa: ${error.response.data.error}`
            : "Erro desconhecido ao atualizar tarefa"
        );
      }
    }
  };

  const handleSelectTask = (task) => {
    setIsExpanded(true);
    setSelectedTask(task);
    setSelectedTaskTitle(task.title);
    setSelectedTaskDescription(task.description);
  };

  async function handleUpdateTask() {
    try {
      const updatedTask = {
        ...selectedTask,
        title: selectedTaskTitle,
        description: selectedTaskDescription,
        date: selectedTaskDate
      };

      await axios.put(`http://localhost:8000/api/tasks/update/${selectedTask.id}`, updatedTask);

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === selectedTask.id ? updatedTask : task
        )
      );
    } catch (error) {
      console.error(
        error.response
          ? `Erro ao atualizar tarefa: ${error.response.data.error}`
          : "Erro desconhecido ao atualizar tarefa"
      );
    }
  }

  return (
    <>
      <Aside />
      <div className={styles.centerColumn}>
        <NewTask onCreate={fetchTasks} />
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              isCompleted={task.isCompleted}
              onToggleCompleted={() => handleToggleCompleted(task.id)}
              onSelectTask={() => handleSelectTask(task)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
        <div>
          <Calendar />
        </div>
      </div>
      <div
        className={`${styles.rightColumn} ${
          isExpanded ? styles.rightColumnEntered : styles.rightColumnExited
        }`}
      >
        {isExpanded && (
          <div
            className={`${
              isExpanded
                ? styles.rightColumnWrapperEntered
                : styles.rightColumnWrapperExited
            }`}
          >
            <div className={styles.rightColumnScrollableData}>
              <div className={styles.taskInfo}>
                <div className={styles.taskAtribute}>
                  <h3>Título</h3>
                  <input
                    type="text"
                    value={selectedTaskTitle}
                    onChange={(e) => setSelectedTaskTitle(e.target.value)}
                    onBlur={handleUpdateTask}
                  />
                </div>
                <div className={styles.taskAtribute}>
                  <h3>Descrição</h3>
                  <textarea
                    placeholder="Insira uma descrição"
                    value={selectedTaskDescription}
                    onChange={(e) => setSelectedTaskDescription(e.target.value)}
                    onBlur={handleUpdateTask}
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
                    value={selectedTaskDate}
                    onChange={(e) => setSelectedTaskDate(e.target.value)}
                    onBlur={handleUpdateTask}
                  />
                </div>
              </div>
            </div>
            <div className={styles.rightColumnFooter}>
              <div
                className={styles.deleteButton}
                title="Excluir tarefa"
                onClick={() => handleDeleteTask(selectedTask.id)}
              >
                <Trash size={24} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
