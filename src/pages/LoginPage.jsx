import { Login } from "../components/Login/Login"
import styles from "./LoginPage.module.css"
import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";

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