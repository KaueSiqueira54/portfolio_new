import styles from "../styles/Section_tres/Section_tres.module.css";
import Education_1 from "../images/Section_tres/Education_1.svg";
import Education_2 from "../images/Section_tres/Education_2.svg";
import Education_3 from "../images/Section_tres/Education_3.svg";
import Education_4 from "../images/Section_tres/Education_4.svg";

export default function Section_tres() {
  return (
    <section className={styles.sec}>
      <div className={styles.title}>Educação</div>
      <div className={styles.edu_1}>
        <div className={styles.image}>
          <img src={Education_1} alt="Educação 1" />
        </div>
        <div className={styles.texts_container}>
          <div className={styles.texts}>
            <h3>Escolar - 2020</h3>
            <p>
              Iniciei meus estudos no Ensino Médio, onde desenvolvi curiosidade
              e paixão por aprender coisas novas, principalmente nas áreas de
              tecnologia e filosofia, que sempre me chamaram muita atenção
            </p>
          </div>
        </div>
      </div>
      {/* Edu 2 */}
      <div className={`${styles.edu_1} ${styles.edu_2}`}>
        <div className={styles.image}>
          <img src={Education_2} alt="Educação 2" />
        </div>
        <div className={styles.texts_container}>
          <div className={styles.texts}>
            <h3>Técnico em Jogos Digitais - 2021</h3>
            <p>
              Realizei o curso técnico e formação inicial de Jogos Digitais na
              Fatec Carapícuiba, onde desenvolvi habilidades de Produção,
              princípios e Programação de Jogos Digitais, utilizando linguagem
              Python.
            </p>
          </div>
        </div>
      </div>
      {/* Edu 3 */}
      <div className={styles.edu_1}>
        <div className={styles.image}>
          <img src={Education_3} alt="Educação 3" />
        </div>
        <div className={styles.texts_container}>
          <div className={styles.texts}>
            <h3>Técnico em Informática e ADM - 2023</h3>
            <p>
              Conclui o curso de Informática com Administração, onde pude
              adquirir diversos conhecimentos do mundo técnologico e
              administrativo, com ênfase em Pacote Office, Hardware, Gestão de
              Pessoas, Administração e Marketing, consolidando diversos
              conceitos novos.
            </p>
          </div>
        </div>
      </div>
      {/* Edu 4 */}
      <div className={`${styles.edu_1} ${styles.edu_2}`}>
        <div className={styles.image}>
          <img src={Education_4} alt="Educação 4" />
        </div>
        <div className={styles.texts_container}>
          <div className={styles.texts}>
            <h3>Instituto PROA - 2026</h3>
            <p>
              Adentrei no PROPROFISSÂO, formação oferecida pelo PROA, onde pude
              adquirir diversos novos conhecimentos e habilidades, tanto em
              Hard-Skills quanto em Soft-Skills, essenciais para o mercado de
              trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
