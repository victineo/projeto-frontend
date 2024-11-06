import styles from "./SignBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignBar() {
  return (
    <div>
      <Link to={"/login"}>
        <button className={styles.signButton}>Login</button>
      </Link>
      <Link to={"/register"}>
        <button className={styles.signButton}>Cadastrar</button>
      </Link>
    </div>
  );
}
