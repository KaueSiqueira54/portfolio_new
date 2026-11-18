import { useState } from "react";
import styles from "../styles/Header/Header.module.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#educacao", label: "Educação" },
  { href: "#certificados", label: "Certificados" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contatos", label: "Contatos" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  function irParaHome() {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    setAberto(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.div_text} onClick={irParaHome}>
        <h1 className={styles.text_h1}>
          Kauê <span>Siqueira</span>
        </h1>
      </div>

      <button
        type="button"
        className={`${styles.menu_btn} ${aberto ? styles.aberto : ""}`}
        onClick={() => setAberto((o) => !o)}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        aria-controls="menu-principal"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="menu-principal"
        className={`${styles.nav_links} ${aberto ? styles.nav_aberto : ""}`}
      >
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setAberto(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
