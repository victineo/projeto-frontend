import { useState } from 'react';
import styles from './Task.module.css'
import { Circle } from 'phosphor-react';
import { CheckCircle } from 'phosphor-react';

export function Task({ task, onDelete }) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxClick = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className={`${styles.taskCard} ${isCompleted ? styles.completed : ''}`}>
            <div className={`${styles.checkBox} ${isCompleted ? styles.checked : ''}`} onClick={handleCheckboxClick}>
                {isCompleted ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} />}
            </div>
            <div className={styles.taskInfo}>
                <div className={styles.taskTitle}>
                    Tarefa{task}
                </div>
                <div className={styles.taskDescription}>
                    Descrição breve
                </div>
            </div>
        </div>
    );
}