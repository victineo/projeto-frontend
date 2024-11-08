import styles from "./Help.module.css";
import { Header } from "../components/Header/Header"


export function Help() {
  return (
    <div className={styles.helpContainer}>
      <Header />
      <h1 className={styles.helpTitle}>Como podemos ajudar?</h1>
      <p className={styles.sectionContent}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus animi ex exercitationem cum. Vitae commodi repellendus officia ea voluptatibus cum similique deleniti, maiores optio necessitatibus quibusdam molestias suscipit, eum quos!
      </p>
      <div>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes (FAQ)</h2>
        <h3 className={styles.questionTitle}>Pergunta 1</h3>
        <p className={styles.sectionContent}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus animi ex exercitationem cum. Vitae commodi repellendus officia ea voluptatibus cum similique deleniti, maiores optio necessitatibus quibusdam molestias suscipit, eum quos!
        </p>
        <h3 className={styles.questionTitle}>Pergunta 2</h3>
        <p className={styles.sectionContent}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus animi ex exercitationem cum. Vitae commodi repellendus officia ea voluptatibus cum similique deleniti, maiores optio necessitatibus quibusdam molestias suscipit, eum quos!
        </p>
        <h3 className={styles.questionTitle}>Pergunta 3</h3>
        <p className={styles.sectionContent}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus animi ex exercitationem cum. Vitae commodi repellendus officia ea voluptatibus cum similique deleniti, maiores optio necessitatibus quibusdam molestias suscipit, eum quos!
        </p>
      </div>
      <div>
        <h2 className={styles.sectionTitle}>Como funciona?</h2>
        <h3 className={styles.questionTitle}>Titulo da explicação</h3>
        <p className={styles.sectionContent}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus animi ex exercitationem cum. Vitae commodi repellendus officia ea voluptatibus cum similique deleniti, maiores optio necessitatibus quibusdam molestias suscipit, eum quos!
        </p>
      </div>
      <div>
        <h2 className={styles.sectionTitle}>Suporte ao Cliente</h2>
        <h3 className={styles.questionTitle}>Contato</h3>
        <p className={styles.sectionContent}>Duvidas ou sugestões?</p>
        <p className={styles.sectionContent}>Entre em contato com a gente nos canais abaixo:</p>
        <div className={styles.contactInfo}>
          <p>Email : 0VjvG@example.com</p>
          <p>Telefone : (00) 0000-0000</p>
          <p>WhatsApp : (00) 00000-0000</p>
          <p>Instagram : <a href="https://instagram.com/nome_da_empresa">@nome_da_empresa</a></p>
        </div>
      </div>
    </div>
  );
}
