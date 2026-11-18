import styles from "../styles/Section_dois/Section_dois.module.css";
import SiqueiraBanner from "../images/Section_dois/Siqueira.svg";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPython,
  SiWordpress,
  SiMysql,
  SiFigma,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const TECNOLOGIAS = [
  { nome: "HTML", icone: SiHtml5, cor: "#E34F26" },
  { nome: "CSS", icone: SiCss, cor: "#1572B6" },
  { nome: "JavaScript", icone: SiJavascript, cor: "#F7DF1E" },
  { nome: "React", icone: SiReact, cor: "#61DAFB" },
  { nome: "Java", icone: FaJava, cor: "#ED8B00" },
  { nome: "Python", icone: SiPython, cor: "#fff" },
  { nome: "WordPress", icone: SiWordpress, cor: "#fff" },
  { nome: "SQL", icone: SiMysql, cor: "#fff" },
  { nome: "Figma", icone: SiFigma, cor: "#F24E1E" },
  { nome: "VS Code", icone: VscVscode, cor: "#007ACC" },
  { nome: "GitHub", icone: SiGithub, cor: "#FFFFFF" },
  { nome: "Git", icone: SiGit, cor: "#F05032" },
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
        {TECNOLOGIAS.map(({ nome, icone: Icone, cor }) => (
          <li key={nome} className={styles.tec} title={nome}>
            <Icone color={cor} aria-label={`Logo do ${nome}`} role="img" />
          </li>
        ))}
      </ul>
    </section>
  );
}
