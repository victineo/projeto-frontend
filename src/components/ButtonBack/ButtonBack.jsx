import { ArrowLeft } from "phosphor-react"
import styles from "./ButtonBack.module.css"
import { Link } from "react-router-dom"

export function ButtonBack() {
  return (
    <Link to="/" className={styles.backButtonLink}>
      <button className={styles.backButton}>
        
            <ArrowLeft size={24} />
            Voltar
      </button>
    </Link>
  )
}
