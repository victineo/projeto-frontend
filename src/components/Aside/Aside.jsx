import styles from "./Aside.module.css";
import { NavBar } from "../NavBar/NavBar.jsx";
import Logo from "../../assets/check-fat-fill.svg";
import { InputField } from "../InputField/InputField.jsx";
import { ProgressBar } from "../ProgressBar/ProgressBar.jsx";
import { MagnifyingGlass } from "phosphor-react";
import { SignBar } from "../SignBar/SignBar.jsx"

export function Aside() {
  return (
    <aside>
      <div className={styles.top}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="Logo" />
          <h1>To-do list</h1>
        </div>
        <InputField
          className={styles.searchField}
          placeholder="Pesquisar tarefa"
          icon={<MagnifyingGlass size={24} />}
        />
      </div>
      <NavBar />
      <ProgressBar />
      <SignBar />
    </aside>
  );
}
