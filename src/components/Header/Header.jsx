import { NavBar } from "../NavBar/NavBar";
import Logo from "../../assets/check-fat-fill.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";


export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img className={styles.logo} src={Logo} alt="Logo" />
                    <h1>To-do list</h1>
                </Link>
            </div>
            <NavBar orientation="horizontal" />
        </header>
    );
}
