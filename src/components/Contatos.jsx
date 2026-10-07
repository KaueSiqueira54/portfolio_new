import styles from "../styles/Section_seis/Contatos.module.css";
import Github from "../images/Section_seis/GitHub.svg";
import Instagram from "../images/Section_seis/Instagram.svg";
import Linkedin from "../images/Section_seis/Linkedln.svg";

export default function Contatos() {
  return (
    <section className={styles.sec1}>
      <h2 className={styles.title}>Contate-me</h2>
      <p className={styles.title_p}>
        Estou disponível para serviços e novas conexões. Conecte-se comigo
        através das minhas redes sociais.
      </p>
      <div className={styles.icons}>
        <a href="">
          <img src={Github} alt="Logo do GitHub" />
        </a>
        <a href="">
          <img src={Instagram} alt="Logo do Instagram" />
        </a>
        <a href="">
          <img src={Linkedin} alt="Logo do Linkedin" />
        </a>
      </div>
    </section>
  );
}
