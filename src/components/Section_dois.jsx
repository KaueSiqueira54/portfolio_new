import styles from "../styles/Section_dois/Section_dois.module.css";
import SiqueiraBanner from "../images/Section_dois/SiqueiraBanner.svg";
import HTML from "../images/Section_dois/HTML.svg";
import CSS from "../images/Section_dois/CSS.svg";
import JS from "../images/Section_dois/JS.svg";
import React from "../images/Section_dois/React.svg";
import Java from "../images/Section_dois/Java.svg";
import Python from "../images/Section_dois/Python.svg";
import WordPress from "../images/Section_dois/WordPress.svg";
import SQL from "../images/Section_dois/SQL.svg";
import Figma from "../images/Section_dois/Figma.svg";
import VS from "../images/Section_dois/VS.svg";
import GitHub from "../images/Section_dois/GitHub.svg";
import Git from "../images/Section_dois/Git.svg";

export default function Section_dois() {
  return (
    <section className={styles.sec_one}>
      <div className={styles.image}>
        <img src={SiqueiraBanner} alt="SiqueiraProgrammer Banner" />
      </div>
      <div className={styles.title}>
        <h1>Conhecimento nas principais tecnologias do mercado</h1>
      </div>
      <div className={styles.tecnologias}>
        <div className={styles.container}>
          <div className={styles.tec}>
            <img src={HTML} alt="Logo do HTML" />
          </div>
          <div className={styles.tec}>
            <img src={CSS} alt="Logo do CSS" />
          </div>
          <div className={styles.tec}>
            <img src={JS} alt="Logo do JavaScript" />
          </div>
          <div className={styles.tec}>
            <img src={React} alt="Logo do React" />
          </div>
        </div>
        {/* Container 2 */}
        <div className={styles.container}>
          <div className={styles.tec}>
            <img src={Java} alt="Logo do Java" />
          </div>
          <div className={styles.tec}>
            <img src={Python} alt="Logo do Python" />
          </div>
          <div className={styles.tec}>
            <img src={WordPress} alt="Logo do WordPress" />
          </div>
          <div className={styles.tec}>
            <img src={SQL} alt="Logo do SQL" />
          </div>
        </div>
        {/* Container 3 */}
        <div className={styles.container}>
          <div className={styles.tec}>
            <img src={Figma} alt="Logo do Figma" />
          </div>
          <div className={styles.tec}>
            <img src={VS} alt="Logo do Visual Studio Code" />
          </div>
          <div className={styles.tec}>
            <img src={GitHub} alt="Logo do GitHub" />
          </div>
          <div className={styles.tec}>
            <img src={Git} alt="Logo do Git" />
          </div>
        </div>
      </div>
    </section>
  );
}
