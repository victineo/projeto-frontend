import { ArrowLeft } from "phosphor-react"
import styles from "./ButtonBack.module.css"
import { Link } from "react-router-dom"

export function ButtonBack() {
  return (
    <button className={styles.backButton}>
        <Link to="/">
            <ArrowLeft size={24} />
            Voltar
        </Link>
    </button>
  )
}
