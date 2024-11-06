import styles from './Task.module.css'
import { CheckCircle } from 'phosphor-react';

export function Task({ task, onDelete }) {
    return (
        <div className={styles.taskCard}>
            <div className={styles.checkBox}>
                <CheckCircle size={24}/>
            </div>
            <div className={styles.taskInfo}>
                <body className={styles.taskTitle}>Tarefa{task}</body>
                <body className={styles.taskDescription}>
                    Descrição breve
                </body>
            </div>
        </div>
    );
}