import styles from './AboutUs.module.css'

export function AboutUs() {
    return (
        <div className={styles.aboutUs}>
            <h1>Sobre Nós</h1>
                <p>
                    Olá, Somos uma equipe de alunos cursando Análise e Desenvolvimento de Sistemas e futuros desenvolvedores. Fizemos este projeto com o intuito de ser entregue como trabalho da faculdade, porém esperamos que possam fazer bom uso dele no dia a dia de vocês!
                </p>
            <h1>Desenvolvedores</h1>
                <p>Victor Henrique Alves de Oliveira Lopes</p>
                <p>Pietro Vianna da Rocha</p>
                <p>Gustavo Drumond Duarte</p>
                <p>Guilherme Pereira da Silva Licati de Queiroz</p>
                <p>Yure Dias Dos Santos</p>
        </div>
    );
}
