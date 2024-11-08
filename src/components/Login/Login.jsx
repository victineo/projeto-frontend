import { useState } from "react";
import styles from "./Login.module.css";
import { ButtonBack } from "../ButtonBack/ButtonBack";
import { Link } from "react-router-dom";

export function Login () {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
          <ButtonBack />
        <h1 className={styles.formTitle}>Faça login</h1>
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
            Ainda não possui uma conta? <Link to="/register">Registre-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
