import styles from "./Header.module.css";
import { NavBar } from "../NavBar/NavBar.jsx";
import Logo from "../../assets/check-fat-fill.svg";
import { InputField } from "../InputField/InputField.jsx";
import { ProgressBar } from "../ProgressBar/ProgressBar.jsx";
import { MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <aside>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <h1>To-do list</h1>
      </div>
      <ProgressBar />
      <InputField
        placeholder="Adicione uma nova tarefa"
        icon={<MagnifyingGlass size={24} />}
      />
    </aside>
  );
}
