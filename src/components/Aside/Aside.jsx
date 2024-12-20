import styles from "./Aside.module.css";
import { NavBar } from "../NavBar/NavBar.jsx";
import Logo from "../../assets/check-fat-fill.svg";
import { InputField } from "../InputField/InputField.jsx";
import { MagnifyingGlass } from "phosphor-react";
import { SignBar } from "../SignBar/SignBar.jsx"
import { Link } from "react-router-dom";


export function Aside() {
  return (
    <aside>
      <div className={styles.top}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img className={styles.logo} src={Logo} alt="Logo" />
            <h1>To-do list</h1>
          </Link>
        </div>
        <InputField
          className={styles.searchField}
          placeholder="Pesquisar tarefa"
          icon={<MagnifyingGlass size={24} />}
        />
      </div>
      <NavBar orientation="vertical" />
      <SignBar />
    </aside>
  );
}
