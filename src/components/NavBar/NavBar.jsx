import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar({ orientation = "vertical" }) {
  return (
    <nav className={styles.navBar}>
      <ul className={orientation === "vertical" ? styles.vertical : styles.horizontal}>
        <Link to="/subscriptions" className={styles.navLink}>Planos de assinatura</Link>
        <Link to="/about-us" className={styles.navLink}>Sobre nós</Link>
        <Link to="/help" className={styles.navLink}>Ajuda</Link>
      </ul>
    </nav>
  );
}
