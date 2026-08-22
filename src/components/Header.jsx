import styles from "../styles/Header/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.div_text}>
        <h1 className={styles.text_h1}>
          Kauê <span>Siqueira</span>
        </h1>
      </div>
      <nav className={styles.nav_links}>
        <a href="#">Home</a>
        <a href="#">Educação</a>
        <a href="#">Certificados</a>
        <a href="#">Projetos</a>
        <a href="#">Contatos</a>
      </nav>
    </header>
  );
}

export default Header;
