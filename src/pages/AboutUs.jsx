import styles from "./AboutUs.module.css";
import { Header } from "../components/Header/Header";

export function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.contentHeader}>Sobre Nós</h1>
        <p>
          Olá, Somos uma equipe de alunos cursando Análise e Desenvolvimento de
          Sistemas e futuros desenvolvedores. Fizemos este projeto com o intuito
          de ser entregue como trabalho da faculdade, porém esperamos que possam
          fazer bom uso dele no dia a dia de vocês!
        </p>

        <h2 className={styles.title}>Gerente do Projeto</h2>

        <li>Yure Dias dos Santos</li>

        <h2 className={styles.title}>Desenvolvedores</h2>
        <li>Victor Henrique Alves de Oliveira Lopes</li>
        <li>Pietro Vianna da Rocha</li>
        <li>Gustavo Drumond Duarte</li>
        <li>Guilherme Pereira da Silva Licati de Queiroz</li>
      </div>
    </div>
  );
}
