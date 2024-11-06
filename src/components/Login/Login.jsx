import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "./Login.module.css";

export function Login () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log("Dados de Login:", { username, password });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className={styles.input-field}>
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className={styles.icon} />
        </div>
        <div className={st.input-field}>
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className={styles.icon} />
        </div>

        <div className={styles.recall-forget}>
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Login</button>
        <div className={styles.signup-link}>
          <p>
            Não tem uma conta? <a href="#">Registar</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};