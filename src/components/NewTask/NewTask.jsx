import React, { useState } from 'react';
import styles from './NewTask.module.css';
import axios from 'axios';

export function NewTask({ onCreate }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleCreateNewTask() {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/tasks/add', {
                title,
                description,
            });
            console.log(response.data.message);
        } catch (error) {
            console.error(error.response ? error.response.data.message : 'Erro ao criar tarefa');
        }
    };

    const autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
            <div className={styles.newTaskContent}>
                <div className={styles.checkBox}>
                    
                </div>
                <div className={styles.newTaskInfo}>
                    <input
                        className={styles.newTaskTitle}
                        type="text"
                        placeholder="Título da tarefa"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onInvalid={(e) => e.target.setCustomValidity('A tarefa precisa ter um título!')}
                        required
                    />
                    <textarea
                        className={styles.newTaskDescription}
                        placeholder="Descrição da tarefa"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onInput={(e) => autoResize(e)}
                    />
                </div>
                <button type="submit" disabled={title.trim() === ''}>Criar</button>
            </div>
        </form>
    );
}
