import { useState } from "react";
import "../global.css";
import { Aside } from "../components/Aside/Aside";
import { Task } from "../components/Task/Task";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";
import { Plus } from "phosphor-react";

export function HomePage() {
  return (
    <>
      <Aside />
      <div className="container">
        <button className="createTaskButton">
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
