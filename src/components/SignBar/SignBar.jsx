import styles from "./SignBar.module.css";

export function SignBar(){
    return (
        <div>
            <button className={styles.signButton}>Login</button>
            <button className={styles.signButton}>Cadastrar</button>
        </div>
    )
}