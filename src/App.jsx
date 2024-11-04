import { useState } from 'react'
import './global.css'
import { Header } from './components/Header/Header'
import { Task } from './components/Task/Task'
import { Plus } from 'phosphor-react'
import { ProgressBar } from './components/ProgressBar/ProgressBar'

function App() {
  return (
    <>
      <Header />
      <div className='allContent'>
        < ProgressBar />
        <button className='createTaskButton'> <Plus size={24} />Criar nova tarefa</button>
        <div className='taskList'>
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  )
}

export default App
