import styles from "../styles/Section_quatro/Certificados.module.css";
import { useState } from "react";

function CertificadoCard({
  imagem,
  instituicao,
  titulo,
  tipo,
  cargaHoraria,
  conteudo = [],
}) {
  return (
    <article className={styles["cert-card"]}>
      <div className={styles["cert-card__imagem"]}>
        <img src={imagem} alt={`Certificado de ${titulo} - ${instituicao}`} />
      </div>

      <div className={styles["cert-card__info"]}>
        <p className={styles["cert-card__instituicao"]}>{instituicao}</p>
        <h3 className={styles["cert-card__titulo"]}>{titulo}</h3>
        <p className={styles["cert-card__tipo"]}>{tipo}</p>
        <p className={styles["cert-card__tipo"]}>
          Carga horária: {cargaHoraria}
        </p>
        <p className={styles["cert-card__conteudo"]}>{conteudo.join(", ")}</p>
      </div>
    </article>
  );
}

export default function Certificados({
  titulo = "CERTIFICADOS",
  certificados = [],
}) {
  const [atual, setAtual] = useState(0);
  const total = certificados.length;

  if (total === 0) return null;

  const anterior = () => setAtual((i) => (i - 1 + total) % total);
  const proximo = () => setAtual((i) => (i + 1) % total);

  const aoPressionarTecla = (e) => {
    if (e.key === "ArrowLeft") anterior();
    if (e.key === "ArrowRight") proximo();
  };

  return (
    <section
      className={styles.certificados}
      aria-label={titulo}
      onKeyDown={aoPressionarTecla}
    >
      <h2 className={styles.certificados__titulo}>{titulo}</h2>

      <div className={styles.certificados__carrossel}>
        <button
          type="button"
          className={styles.certificados__seta}
          onClick={anterior}
          aria-label="Certificado anterior"
        >
          <svg viewBox="0 0 24 40" aria-hidden="true">
            <polyline points="20,4 4,20 20,36" />
          </svg>
        </button>

        <div className={styles.certificados__janela}>
          <div
            className={styles.certificados__pista}
            style={{ transform: `translateX(-${atual * 100}%)` }}
          >
            {certificados.map((cert, i) => (
              <div
                className={styles.certificados__slide}
                key={cert.id ?? i}
                aria-hidden={i !== atual}
              >
                <CertificadoCard {...cert} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.certificados__seta}
          onClick={proximo}
          aria-label="Próximo certificado"
        >
          <svg viewBox="0 0 24 40" aria-hidden="true">
            <polyline points="4,4 20,20 4,36" />
          </svg>
        </button>
      </div>

      <div
        className={styles.certificados__pontos}
        role="tablist"
        aria-label="Escolher certificado"
      >
        {certificados.map((cert, i) => (
          <button
            type="button"
            key={cert.id ?? i}
            role="tab"
            aria-selected={i === atual}
            aria-label={`Ir para o certificado ${i + 1} de ${total}`}
            className={`${styles.certificados__ponto} ${
              i === atual ? styles["is-ativo"] : ""
            }`}
            onClick={() => setAtual(i)}
          />
        ))}
      </div>
    </section>
  );
}
