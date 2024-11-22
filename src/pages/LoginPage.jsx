import styles from "./LoginPage.module.css";
import { Login } from "../components/Login/Login";
import { Header } from "../components/Header/Header";

export function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.loginPage}>
        <Login />
      </div>
    </div>
  );
}
