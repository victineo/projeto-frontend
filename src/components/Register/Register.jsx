import { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";

export function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [successmessage, setSuccessMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData  = {
      name: name,
      username: username,
      email: email,
      password: password
    }

    try {
      const response = await axios.post("http://localhost:8000/api/users/register", userData);
      setSuccessMessage(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : 'Erro no registro');
      setSuccessMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.registerForm} onSubmit={handleRegister}>
        <h1 className={styles.formTitle}>Registro</h1>

        {errormessage && <p className={styles.errorMessage}>{errormessage}</p>}
        {successmessage && <p className={styles.successMessage}>{successmessage}</p>}

        <div className={styles.inputField}>
          <input 
            type="text" 
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputField}>
          <input 
            type="text"   
            placeholder="Nome de Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputField}>
          <input 
            type="email"
            placeholder="Email"
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
        <button className={styles.signInButton} type="submit">Registrar-se</button>
        <div className={styles.loginLink}>
          <p>Já possui uma conta? <a href="#">Faça login</a></p>
        </div>
      </form>
    </div>
  );
}
