import styles from "../styles/Section_cinco/Projetos.module.css";
import { useState } from "react";

// ---------- Card individual: recebe os dados de UM projeto via props ----------
function ProjetoCard({
  imagem,
  titulo,
  descricao,
  tecnologias = [],
  linkPrevia,
  linkRepositorio,
}) {
  return (
    <article className={styles["projeto-card"]}>
      <div className={styles["projeto-card__imagem"]}>
        <img src={imagem} alt={`Captura de tela do projeto ${titulo}`} />
      </div>

      <div className={styles["projeto-card__info"]}>
        <h3 className={styles["projeto-card__titulo"]}>{titulo}</h3>
        <p className={styles["projeto-card__descricao"]}>{descricao}</p>

        <ul className={styles["projeto-card__techs"]}>
          {tecnologias.map((tech) => (
            <li className={styles["projeto-card__tech"]} key={tech.nome}>
              <img src={tech.icone} alt={tech.nome} title={tech.nome} />
            </li>
          ))}
        </ul>

        <div className={styles["projeto-card__links"]}>
          {linkPrevia && (
            <a
              className={`${styles.botao} ${styles["botao--cheio"]}`}
              href={linkPrevia}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prévia
            </a>
          )}
          {linkRepositorio && (
            <a
              className={`${styles.botao} ${styles["botao--contorno"]}`}
              href={linkRepositorio}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ---------- Seção com o carrossel: recebe a lista de projetos via props ----------
export default function Projetos({ titulo = "PROJETOS", projetos = [] }) {
  const [atual, setAtual] = useState(0);
  const total = projetos.length;

  if (total === 0) return null;

  const anterior = () => setAtual((i) => (i - 1 + total) % total);
  const proximo = () => setAtual((i) => (i + 1) % total);

  const aoPressionarTecla = (e) => {
    if (e.key === "ArrowLeft") anterior();
    if (e.key === "ArrowRight") proximo();
  };

  return (
    <section
      className={styles.projetos}
      aria-label={titulo}
      onKeyDown={aoPressionarTecla}
    >
      <h2 className={styles.projetos__titulo}>{titulo}</h2>

      <div className={styles.projetos__carrossel}>
        <button
          type="button"
          className={styles.projetos__seta}
          onClick={anterior}
          aria-label="Projeto anterior"
        >
          <svg viewBox="0 0 24 40" aria-hidden="true">
            <polyline points="20,4 4,20 20,36" />
          </svg>
        </button>

        <div className={styles.projetos__janela}>
          <div
            className={styles.projetos__pista}
            style={{ transform: `translateX(-${atual * 100}%)` }}
          >
            {projetos.map((projeto, i) => (
              <div
                className={styles.projetos__slide}
                key={projeto.id ?? i}
                aria-hidden={i !== atual}
              >
                <ProjetoCard {...projeto} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.projetos__seta}
          onClick={proximo}
          aria-label="Próximo projeto"
        >
          <svg viewBox="0 0 24 40" aria-hidden="true">
            <polyline points="4,4 20,20 4,36" />
          </svg>
        </button>
      </div>

      <div
        className={styles.projetos__pontos}
        role="tablist"
        aria-label="Escolher projeto"
      >
        {projetos.map((projeto, i) => (
          <button
            type="button"
            key={projeto.id ?? i}
            role="tab"
            aria-selected={i === atual}
            aria-label={`Ir para o projeto ${i + 1} de ${total}`}
            className={`${styles.projetos__ponto} ${
              i === atual ? styles["is-ativo"] : ""
            }`}
            onClick={() => setAtual(i)}
          />
        ))}
      </div>
    </section>
  );
}
