import styles from "./Subscriptions.module.css";
import { Check } from "phosphor-react";
import { Header } from "../components/Header/Header"

export function Subscriptions() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Escolha um plano ideal para você</h1>
        <div className={styles.plans}>
          <div className={styles.plan}>
            <div className={styles.planTop}>
              <h3>Plano Gratuito</h3>
              <div className={styles.planFeatures}>
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
                  Limite de 1 ou 2 projetos simultâneos.
                </p>
              </div>
            </div>
            <div className={styles.planFooter}>
              <h5>Gratuito</h5>
              <button className={styles.subscribeButton}>Assinar</button>
            </div>
          </div>
          <div className={styles.plan}>
            <div className={styles.planTop}>
              <h3>Plano Básico</h3>
              <div className={styles.planFeatures}>
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
                  Limite de 5 projetos simultâneos
                </p>
                <p className={styles.planFeature}>
                  <Check />
                  Sem anúncios
                </p>
              </div>
            </div>
            <div className={styles.planFooter}>
              <h5>R$ 9,90</h5>
              <button className={styles.subscribeButton}>Assinar</button>
            </div>
          </div>
          <div className={styles.plan}>
            <div className={styles.planTop}>
              <h3>Plano Premium</h3>
              <div className={styles.planFeatures}>
                <p className={styles.planFeature}>
                  <Check />
                  Sem limite de tarefas
                </p>
                <p className={styles.planFeature}>
                  <Check />
                  Sem limite de tarefas por dia
                </p>
                <p className={styles.planFeature}>
                  <Check />
                  Sem limite de projetos simultâneos
                </p>
                <p className={styles.planFeature}>
                  <Check />
                  Sem anúncios
                </p>
              </div>
            </div>
            <div className={styles.planFooter}>
              <h5>R$ 29,90</h5>
              <button className={styles.subscribeButton}>Assinar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
