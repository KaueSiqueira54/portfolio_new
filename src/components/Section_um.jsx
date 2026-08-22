import styles from "../styles/Section_um/Section_um.module.css";
import Github from "../images/Section_um/GitHub.svg";
import Instagram from "../images/Section_um/Instagram.svg";
import Linkedln from "../images/Section_um/Linkedin.svg";
import Kaue from "../images/Section_um/Kaue.png";

export default function Section_um() {
  return (
    <section className={styles.sec_um}>
      <div className={styles.div_um}>
        <div className={styles.text_um}>
          <h2>
            Olá, sou o <span>Kauê</span>
          </h2>
        </div>
        <div className={styles.text_dois}>
          <h2>
            Eu sou <span>Programador</span>
          </h2>
        </div>
        <div className={styles.text_p}>
          <p>
            Apaixonado por conhecimento e tecnologia, meu primeiro "Hello world"
            foi no Python e desde então busco o conhecimento nesse mundo tão
            vasto da tecnologia. Estou apenas começando minha jornada, onde
            pretendo adentrar na universidade e me formar em Desenvolvimento de
            Sistemas, buscando sempre conhecer mais essa área em constante
            evolução.
          </p>
        </div>

        <div className={styles.redes}>
          <img src={Github} alt="Logo do GitHub" />
          <img src={Instagram} alt="Logo do Instagram" />
          <img src={Linkedln} alt="Logo do Linkedln" />
        </div>

        <div className={styles.botoes}>
          <button className={styles.btn_1}>Contato</button>
          <button className={styles.btn_2}>Curriculo</button>
        </div>
      </div>

      <div className={styles.div_dois}>
        <img src={Kaue} alt="" />
      </div>
    </section>
  );
}
