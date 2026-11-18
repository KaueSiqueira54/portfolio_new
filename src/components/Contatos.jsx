import styles from "../styles/Section_seis/Contatos.module.css";
import Github from "../images/Section_seis/GitHub.svg";
import Instagram from "../images/Section_seis/Instagram.svg";
import Linkedln from "../images/Section_seis/Linkedln.svg";

export default function Contatos() {
  return (
    <section id="contatos" className={styles.sec1}>
      <h2 className={styles.title}>Contate-me</h2>
      <p className={styles.title_p}>
        Estou disponível para serviços e novas conexões. Conecte-se comigo
        através das minhas redes sociais.
      </p>
      <div className={styles.icons}>
        <a href="https://github.com/KaueSiqueira54" target="_blank">
          <img src={Github} alt="Logo do GitHub" />
        </a>
        <a href="https://www.instagram.com/siqueira_dev54/#" target="_blank">
          <img src={Instagram} alt="Logo do Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/kauesiqueiradev/" target="_blank">
          <img src={Linkedln} alt="Logo do Linkedin" />
        </a>
      </div>
    </section>
  );
}
