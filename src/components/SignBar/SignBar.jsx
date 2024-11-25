import styles from "./SignBar.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function SignBar() {

  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLogged");
    const storedUsername = localStorage.getItem("username");

    if(loggedInStatus === "true" && storedUsername) {
      setIsLogged(true);
      setUsername(storedUsername);
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("username");
    setIsLogged(false);
  }

  return (
    <div className={styles.container}>
      {isLogged ? (
        <>
          <p>Bem-vindo, {username}!</p>
          <button className={styles.signButton} onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <button className={styles.signButton}>Login</button>
          </Link>
          <Link to={"/register"}>
            <button className={styles.signButton}>Cadastrar</button>
          </Link>
        </>
      )}
    </div>
  );
}
