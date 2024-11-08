import React from "react";
import { Check } from "phosphor-react";
import styles from "./Subscriptions.module.css";
import { Header } from "../components/Header/Header"

export function Subscriptions() {
  return (
    <div className={styles.subscriptions}>

      <Header />
      <h1 className={styles.title}>Escolha um plano ideal para você</h1>
      <div className={styles.plans}>
        <div className={styles.plan}>
          <h3 className={styles.planTitle}>Plano Gratuito</h3>
          <p className={styles.planFeature}>
            <Check />
            Limite de tarefas: 10
          </p>
          <p className={styles.planFeature}>
            <Check />
            Limite de tarefas por dia: 5
          </p>
          <p className={styles.planFeature}>
            <Check />
            limite de 1 ou 2 projetos simultâneos.
          </p>
          <h5 className={styles.planPrice}>Gratuito</h5>
          <button className={styles.subscribeButton}>Assinar</button>
        </div>
        <div className={styles.plan}>
          <h3 className={styles.planTitle}>Plano Básico</h3>
          <p className={styles.planFeature}>
            <Check />
            Limite de tarefas: 50
          </p>
          <p className={styles.planFeature}>
            <Check />
            Limite de tarefas por dia: 10
          </p>
          <p className={styles.planFeature}>
            <Check />
            limite de 5 projetos simultâneos
          </p>
          <p className={styles.planFeature}>
            <Check />
            sem anúncios
          </p>
          <h5 className={styles.planPrice}>R$ 9,90</h5>
          <button className={styles.subscribeButton}>Assinar</button>
        </div>
        <div className={styles.plan}>
          <h3 className={styles.planTitle}>Plano Premium</h3>
          <p className={styles.planFeature}>
            <Check />
            Limite de tarefas: ilimitado
          </p>
          <p className={styles.planFeature}>
            <Check />
            Limite de tarefas por dia: ilimitado
          </p>
          <p className={styles.planFeature}>
            <Check />
            projetos simultâneos ilimitados
          </p>
          <p className={styles.planFeature}>
            <Check />
            sem anúncios
          </p>
          <h5 className={styles.planPrice}>R$ 29,90</h5>
          <button className={styles.subscribeButton}>Assinar</button>
        </div>
      </div>
    </div>
  );
}
