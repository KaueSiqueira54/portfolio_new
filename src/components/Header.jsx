import styles from "../styles/Header/Header.module.css";

export default function Header() {
  function irParaHome() {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header className={styles.header}>
      <div className={styles.div_text} onClick={irParaHome}>
        <h1 className={styles.text_h1}>
          Kauê <span>Siqueira</span>
        </h1>
      </div>
      <nav className={styles.nav_links}>
        <a href="#home">Home</a>
        <a href="#educacao">Educação</a>
        <a href="#certificados">Certificados</a>
        <a href="#projetos">Projetos</a>
        <a href="#contatos">Contatos</a>
      </nav>
    </header>
  );
}
