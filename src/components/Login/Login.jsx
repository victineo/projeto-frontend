import { useState } from "react";
import styles from "./Login.module.css";

export function Login () {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <h1>Faça login</h1>
        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="E-mail"
            required
          />
        </div>
        <div className={styles.inputField}>
          <input
            type="password"
            placeholder="Senha"
            required
          />
        </div>
        <div className={styles.recallForget}>
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button className={styles.loginButton} type="submit">Login</button>
        <div className={styles.signupLink}>
          <p>
            Nao tem uma conta? <a href="#">Registar</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};
