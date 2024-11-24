import styles from "./RegisterPage.module.css";
import { Register } from "../components/Register/Register";
import { Header } from "../components/Header/Header";

export function RegisterPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.registerPage}>
        <Register />
      </div>
    </div>
  );
}
