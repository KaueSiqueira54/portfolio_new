import styles from "../styles/Section_um/Section_um.module.css";
import Github from "../images/Section_um/GitHub.svg";
import Instagram from "../images/Section_um/Instagram.svg";
import LinkedIn from "../images/Section_um/LinkedIn.svg";
import Kaue from "../images/Section_um/Kaue.png";
import Curriculo from "../images/Section_um/Curriculo - Kauê Siqueira.pdf";
import TextoDigitando from "./TextoDigitando";

export default function Section_um() {
  function abrirCurriculo() {
    window.open(Curriculo, "_blank", "noopener,noreferrer");
  }

  function irParaContatos() {
    document.getElementById("contatos")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className={styles.sec_um}>
      <div className={styles.div_um}>
        <div className={styles.text_um}>
          <h2>
            Olá, Eu sou <TextoDigitando />
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
          <a href="https://github.com/KaueSiqueira54" target="_blank">
            <img src={Github} alt="Logo do GitHub" />
          </a>
          <a href="https://www.instagram.com/siqueira_dev54/#" target="_blank">
            <img src={Instagram} alt="Logo do Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/kauesiqueiradev/"
            target="_blank"
          >
            <img src={LinkedIn} alt="Logo do Linkedln" />
          </a>
        </div>

        <div className={styles.botoes}>
          <button className={styles.btn_1} onClick={irParaContatos}>
            Contato
          </button>
          <button className={styles.btn_2} onClick={abrirCurriculo}>
            Curriculo
          </button>
        </div>
      </div>

      <div className={styles.div_dois}>
        <img src={Kaue} alt="Kauê Siqueira" />
      </div>
    </section>
  );
}
