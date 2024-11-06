import { useState } from 'react'
import './global.css'
import { Aside } from './components/Aside/Aside'
import { Task } from './components/Task/Task'
import { Plus } from 'phosphor-react'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
      <Aside />
      <div className='container'>
        <button className='createTaskButton'> <Plus size={24} />Criar nova tarefa</button>
        <div className='taskList'>
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
}

export default App
