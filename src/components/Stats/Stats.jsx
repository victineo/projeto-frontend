import style from './Stats.module.css';

export function Stats({ totalTasks, completedTasks }) {
    const pendingTasks = totalTasks - completedTasks;
    return (
        <div className={style.statsContainer}>
            <div className={style.statsItem}>
                <p>Total de Tarefas: {totalTasks}</p>
            </div>
            <div className={style.statsItem}>
                <p>Tarefas Concluídas: {completedTasks}</p>
            </div>
            <div className={style.statsItem}>
                <p>Tarefas Pendentes: {pendingTasks}</p>
            </div>
        </div>
    );
}
