import styles from "./Register.module.css";

export function Register() {
  return (
    <div className={styles.container}>
      <form className={styles.registerForm}>
        <h1>Registro</h1>
        <div className={styles.inputField}>
            <input 
                type="text" 
                placeholder="Nome"
                required
            />
        </div>
        <div className={styles.inputField}>
            <input 
                type="text"   
                placeholder="Email"
                required
            />
        </div>
        <div className={styles.inputField}>
            <input 
                type="text"   
                placeholder="Senha"
                required
            />
        </div>
        <button className={styles.signInButton} type="submit">Registrar-se</button>
        <div className={styles.loginLink}>
            <p>Ja possui uma conta? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  );
}
