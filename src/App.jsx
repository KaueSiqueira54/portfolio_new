import "./App.css";
import Header from "./components/Header";
import Section_dois from "./components/Section_dois";
import Section_tres from "./components/Section_tres";
import Section_um from "./components/Section_um";
import Certificados from "./components/Certificados";
import certJava from "./images/Section_quatro/Desenvolvedor_Java.png";
import certProa from "./images/Section_quatro/Proprofissao.png";
import certJogos from "./images/Section_quatro/JogosDigitais.jpg";
import certCorol from "./images/Section_quatro/Corol.jpg";

const certificados = [
  {
    id: "senac-java",
    imagem: certJava,
    instituicao: "Senac São Paulo",
    titulo: "Desenvolvedor Web Java",
    tipo: "Qualificação Profissional",
    cargaHoraria: "320h",
    conteudo: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Mysql",
      "Java",
      "Projeto Profissional",
      "Demoday",
    ],
  },
  {
    id: "proprofissao",
    imagem: certProa,
    instituicao: "Instituto Proa",
    titulo: "PROPROFISSÃO - 2026",
    tipo: "Qualificação Profissional",
    cargaHoraria: "440h",
    conteudo: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Mysql",
      "Java",
      "Projeto Profissional",
      "Demoday",
      "Atividades de integração de equipe",
      "Planejamento de projetos",
    ],
  },
  {
    id: "jogos-fatec",
    imagem: certJogos,
    instituicao: "Fatec Carapicuiba",
    titulo: "Jogos Digitais - Módulo Único",
    tipo: "Formação Inicial",
    cargaHoraria: "144h",
    conteudo: [
      "Python",
      "Lógica de programação",
      "Pygame",
      "Jogos Digitais",
      "Desenvolvimento de Jogos",
    ],
  },
  {
    id: "informatica-internet",
    imagem: certCorol,
    instituicao: "Corol Company",
    titulo: "Informática com Administração",
    tipo: "Ensino Técnico",
    cargaHoraria: "208h",
    conteudo: [
      "Windows",
      "Internet e Hardware",
      "Pacote Office",
      "Gestão de Pessoas",
      "Administração",
      "Secretariado",
      "Empreendedorismo",
      "Marketing Pessoal",
    ],
  },
  // { id: "...", imagem: ..., instituicao: "...", ... }
];

function App() {
  return (
    <main>
      <Header />
      <Section_um />
      <Section_dois />
      <Section_tres />
      <Certificados certificados={certificados} />
    </main>
  );
}

export default App;
