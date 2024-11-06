import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/subscriptions" className={styles.navLink}>Planos de assinatura</Link>
        <Link to="/about-us" className={styles.navLink}>Sobre nós</Link>
        <Link to="/help" className={styles.navLink}>Ajuda</Link>
      </ul>
    </nav>
  );
}
