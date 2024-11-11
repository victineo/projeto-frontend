import React, { useState } from 'react';
import styles from './NewTask.module.css';
import { Plus } from 'phosphor-react'

export function NewTask({ onCreate }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleCreateNewTask() {
        event.preventDefault();

        const newTitleText = event.target[0].value;
        const newDescriptionText = event.target[1].value;
        if (title.trim()) {
            onCreate({ title: newTitleText, description: newDescriptionText });
            setTitle('');
            setDescription('');
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
