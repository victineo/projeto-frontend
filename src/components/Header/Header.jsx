import styles from "./Header.module.css";
import { NavBar } from "../NavBar/NavBar.jsx";
import Logo from "../../assets/react.svg";
import { InputField } from "../InputField/InputField.jsx";
import { MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
        <h1>To-do list</h1>
      </div>
      <NavBar />
      <InputField 
        placeholder="Adicione uma nova tarefa"
        />
    </header>
  );
}
