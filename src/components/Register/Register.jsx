import styles from "./Register.module.css";

export function Register() {
  return (
    <div className={styles.container}>
      <form className={styles.registerForm}>
        <h1 className={styles.formTitle}>Registro</h1>
        <div className={styles.inputField}>
            <input 
                type="text" 
                placeholder="Nome Completo"
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
            <p>Já possui uma conta? <a href="#">Faça login</a></p>
        </div>
      </form>
    </div>
  );
}
