import styles from './Task.module.css'
import { CheckCircle } from 'phosphor-react';

export function Task({ task, onDelete }) {
    return (
        <div className={styles.taskCard}>
            <div className={styles.checkBox}><CheckCircle size={24}/></div>
            <div className={styles.taskTitle}>Tarefa{task}</div>
        </div>
    );
}