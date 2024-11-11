import React, { useState } from 'react';
import styles from './NewTask.module.css';
import { Plus } from 'phosphor-react'

export function NewTask({ onCreate }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateTask = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onCreate({ title, description });
            setTitle('');
            setDescription('');
        }
    };

    const autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    // const isNewTaskTitleEmpty = newTaskTitle.length == 0;

    return (
        <form className={styles.newTaskForm} onSubmit={handleCreateTask}>
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
