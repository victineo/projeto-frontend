import { Register } from "../components/Register/Register"
import styles from "./RegisterPage.module.css"
import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { Header } from "../components/Header/Header"

export function RegisterPage() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <ButtonBack />
            <div className={styles.registerPage}>
                <Register />
            </div>
        </div>
    );
}