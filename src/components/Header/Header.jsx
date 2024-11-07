import { NavBar } from "../NavBar/NavBar"
import Logo from "../../assets/check-fat-fill.svg";
import styles from "./Header.module.css"

export function Header() {
    return (
        <div>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={Logo} alt="Logo" />
                <h1>To-do list</h1>
            </div>
            <NavBar />
        </div>
    )
}