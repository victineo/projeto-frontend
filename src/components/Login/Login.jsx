import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { ButtonBack } from "../ButtonBack/ButtonBack";
import { Link, useNavigate } from "react-router-dom";

export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/users/login", { email, password });

      console.log(response.data);

      localStorage.setItem("isLogged", true);
      localStorage.setItem("username", response.data.username );

      setSuccessMessage(response.data.message);
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.error : "Erro no login");
      setSuccessMessage("");
    }
  };


  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <ButtonBack />
        <h1 className={styles.formTitle}>Faça login</h1>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputField}>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
