import { useEffect, useState } from "react";
import styles from "../styles/TextoDigitando/TextoDigitando.module.css";

const PALAVRAS = [
  "Docente",
  "Desenvolvedor",
  "Dev Front-End",
  "Futuro Full-Stack",
];

const VELOCIDADE_DIGITANDO = 100; // ms por letra
const VELOCIDADE_APAGANDO = 50; // ms por letra
const PAUSA_COMPLETA = 1500; // ms com a palavra completa
const PAUSA_VAZIA = 300; // ms antes de começar a próxima

export default function TextoDigitando({ palavras = PALAVRAS }) {
  const [indice, setIndice] = useState(0);
  const [texto, setTexto] = useState("");
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    const palavraAtual = palavras[indice];
    let delay;

    if (!apagando && texto === palavraAtual) {
      // palavra completa: espera e começa a apagar
      delay = PAUSA_COMPLETA;
      const t = setTimeout(() => setApagando(true), delay);
      return () => clearTimeout(t);
    }

    if (apagando && texto === "") {
      // palavra apagada: passa para a próxima
      const t = setTimeout(() => {
        setApagando(false);
        setIndice((i) => (i + 1) % palavras.length);
      }, PAUSA_VAZIA);
      return () => clearTimeout(t);
    }

    delay = apagando ? VELOCIDADE_APAGANDO : VELOCIDADE_DIGITANDO;
    const t = setTimeout(() => {
      setTexto(
        apagando
          ? palavraAtual.slice(0, texto.length - 1)
          : palavraAtual.slice(0, texto.length + 1),
      );
    }, delay);

    return () => clearTimeout(t);
  }, [texto, apagando, indice, palavras]);

  return (
    <span className={styles.digitando} aria-label={palavras[indice]}>
      <span aria-hidden="true">{texto}</span>
      <span className={styles.cursor} aria-hidden="true" />
    </span>
  );
}
