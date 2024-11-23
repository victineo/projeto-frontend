import styles from './Task.module.css';
import { Circle, CheckCircle, PencilSimple } from 'phosphor-react';

export function Task({
    title,
    description,
    date,
    onToggleCompleted,
    onSelectTask,
    isCompleted,
}) {
    const formatDate = (date) => {
        if (!date) return "Data não disponível";
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('pt-BR', options);
    };

    return (
        <div className={`${styles.taskCard} ${isCompleted ? styles.completed : ''}`}>
            <div
                className={`${styles.checkBox} ${isCompleted ? styles.checked : ''}`}
                onClick={onToggleCompleted}
                title={isCompleted ? 'Marcar como não concluída' : 'Marcar como concluída'}
            >
                {isCompleted ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} />}
            </div>
            
            <div className={styles.taskInfo}>
                <div className={styles.taskTitle}>{title}</div>
                <div className={styles.taskDescription}>{description}</div>
                <div className={styles.taskDate}>
                    <strong>Data:</strong> {formatDate(date)}
                </div>
            </div>

            <div className={styles.editButton} title="Editar tarefa" onClick={onSelectTask}>
                <PencilSimple size={24} />
            </div>
        </div>
    );
}
