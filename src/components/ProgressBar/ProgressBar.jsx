import styles from './ProgressBar.module.css';
import { Stats } from '../Stats/Stats';

export const ProgressBar = () => {
    return (
        <div className={styles.progressContainer}>
            <Stats />
            <div className={styles.progressBarContainer}>
                <div className={styles.progressBarFill}/>
            </div>
        </div>
    );
};