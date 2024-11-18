import { useState } from 'react';
import styles from './Task.module.css'
import { Circle, CheckCircle, PencilSimple } from 'phosphor-react';

export function Task({ title, description, onToggleCompleted, onToggleExpanded, onSelectTask, onDelete, isExpanded }) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxClick = () => {
        setIsCompleted(!isCompleted);
        onToggleCompleted(!isCompleted);
    };

    return (
        <div className={`${styles.taskCard} ${isCompleted ? styles.completed : ''}`}>
            <div className={`${styles.checkBox} ${isCompleted ? styles.checked : ''}`} onClick={handleCheckboxClick} title={isCompleted ? 'Marcar como não concluída' : 'Marcar como concluída'}>
                {isCompleted ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} />}
            </div>
            <div className={styles.taskInfo}>
                <div className={styles.taskTitle}>
                    {title}
                </div>
                <div className={styles.taskDescription}>
                    {description}
                </div>
            </div>
            <div className={styles.editButton} title="Editar tarefa">
                <PencilSimple size={24} onClick={() => {
                    onToggleExpanded();
                    onSelectTask({ title, description });
                }} />
            </div>
        </div>
    );
}