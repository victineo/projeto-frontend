import styles from "./Register.module.css";

export function Register() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Registro</h1>
        <div class name={styles.input-field}>
            <input 
                type="text" 
                placeholder="Nome"
                required
            />
        </div>
        <div className={styles.input-field}>
            <input 
                type="text"   
                placeholder="Email"
                required
            />
        </div>
        <div className={styles.input-field}>
            <input 
                type="text"   
                placeholder="Senha"
                required
            />
        </div>
        <button type="submit">Registrar</button>
        <div className={styles.login-link}>
            <p>Já possui uma conta? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  );
}
