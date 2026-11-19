import styles from "../styles/Section_dois/Section_dois.module.css";
import SiqueiraBanner from "../images/Section_dois/Siqueira.svg";
import { TECNOLOGIAS } from "../data/tecnologias";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Java",
  "Python",
  "WordPress",
  "SQL",
  "Figma",
  "VS Code",
  "GitHub",
  "Git",
];

export default function Section_dois() {
  return (
    <section className={styles.sec_one}>
      <div className={styles.image}>
        <img src={SiqueiraBanner} alt="SiqueiraProgrammer Banner" />
      </div>
      <div className={styles.title}>
        <h1>Conhecimento nas principais tecnologias do mercado</h1>
      </div>

      <ul className={styles.tecnologias}>
        {SKILLS.map((nome) => {
          const { icone: Icone, cor } = TECNOLOGIAS[nome];
          return (
            <li key={nome} className={styles.tec} title={nome}>
              <Icone color={cor} role="img" aria-label={`Logo do ${nome}`} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
