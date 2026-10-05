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
import certOneAlura from "./images/Section_quatro/OneAlura.png";
import certToeic from "./images/Section_quatro/toeic.png";
import certSantander25 from "./images/Section_quatro/Santander25.png";
import certSantander24 from "./images/Section_quatro/Santander24.png";
import certRihappy from "./images/Section_quatro/Rihappy.jpg";
import certPython from "./images/Section_quatro/Python.png";
import Projetos from "./components/Projetos";
//
import imgSinalizaAI from "./images/Section_cinco/SinalizaAI.png";
import imgParoquia from "./images/Section_cinco/Paroquia.png";
import imgAncora from "./images/Section_cinco/Ancora.png";
import imgConversae from "./images/Section_cinco/Conversae.png";
import imgNexos from "./images/Section_cinco/Nexos.png";
import imgPortfolio from "./images/Section_cinco/Portfolio1.png";

//
import iconReact from "./images/Section_cinco/React.svg";
import iconJs from "./images/Section_cinco/javascript.svg";
import iconJava from "./images/Section_cinco/java.svg";
import iconSql from "./images/Section_cinco/SQL.svg";
import iconHTML from "./images/Section_cinco/Html.svg";
import iconCSS from "./images/Section_cinco/CSS.svg";
import Contatos from "./components/Contatos";

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
  {
    id: "one-alura",
    imagem: certOneAlura,
    instituicao: "Alura",
    titulo: "ONE Tech Foundation G9 - Back End",
    tipo: "Ensino Técnico",
    cargaHoraria: "348h",
    conteudo: [
      "Java",
      "Back-End",
      "Spring Boot",
      "POO",
      "APIs REST",
      "Spring Framework",
      "Empreendedorismo",
      "Lógica de Programação",
    ],
  },
  {
    id: "toeic",
    imagem: certToeic,
    instituicao: "TOEIC Brasil",
    titulo: "TOEIC Listening & Reading Test",
    tipo: "Nível de Inglês",
    cargaHoraria: "Score 460",
    conteudo: ["Inglês", "TOEIC", "Nível de Inglês"],
  },
  {
    id: "santander-2025",
    imagem: certSantander25,
    instituicao: "Digital Innovation One",
    titulo: "Santander 2025 - Front-End",
    tipo: "Bootcamp",
    cargaHoraria: "102h",
    conteudo: ["HTML", "CSS", "JavaScript", "Front-End", "Layout", "UI/UX"],
  },
  {
    id: "rihappy",
    imagem: certRihappy,
    instituicao: "Digital Innovation One",
    titulo: "Ri Happy - Front-end do Zero",
    tipo: "Bootcamp",
    cargaHoraria: "75h",
    conteudo: ["HTML", "CSS", "JavaScript", "Front-End", "Layout", "UI/UX"],
  },
  {
    id: "santander-2024",
    imagem: certPython,
    instituicao: "Digital Innovation One",
    titulo: "Python AI Backend Developer",
    tipo: "Bootcamp",
    cargaHoraria: "67h",
    conteudo: ["Python", "POO", "Lógica de Programação"],
  },
  {
    id: "santander-2024",
    imagem: certSantander24,
    instituicao: "Digital Innovation One",
    titulo: "Santander 2024 - Backend com Java",
    tipo: "Bootcamp",
    cargaHoraria: "87h",
    conteudo: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Lógica de Programação",
    ],
  },
  // { id: "...", imagem: ..., instituicao: "...", ... }
];

// Projetos

const projetos = [
  {
    id: "sinalizaai",
    imagem: imgSinalizaAI,
    titulo: "SinalizaAI",
    descricao: "Plataforma digital completa para o projeto SinalizaAI",
    tecnologias: [
      { nome: "React", icone: iconReact },
      { nome: "JavaScript", icone: iconJs },
      { nome: "Java", icone: iconJava },
      { nome: "SQL", icone: iconSql },
    ],
    linkPrevia: "https://www.sinalizaai.com/",
    linkRepositorio: "https://github.com/SinalizaAI",
  },
  {
    id: "paroquia",
    imagem: imgParoquia,
    titulo: "Paroquia",
    descricao: "Site institucional para uma Paróquia Católica",
    tecnologias: [
      { nome: "Html", icone: iconHTML },
      { nome: "CSS", icone: iconCSS },
      { nome: "JavaScript", icone: iconJs },
      { nome: "React", icone: iconReact },
    ],
    linkPrevia: "https://paroquia-homepage.vercel.app/",
    linkRepositorio: "https://github.com/KaueSiqueira54/Paroquia_homepage",
  },
  {
    id: "ancora",
    imagem: imgAncora,
    titulo: "Âncora",
    descricao: "Plataforma acadêmica para conectar alunos e monitores.",
    tecnologias: [
      { nome: "Html", icone: iconHTML },
      { nome: "CSS", icone: iconCSS },
      { nome: "JavaScript", icone: iconJs },
    ],
    linkPrevia: "https://ancora-black.vercel.app/",
    linkRepositorio: "https://github.com/Joao2007Pedro/Ancora",
  },
  {
    id: "conversae",
    imagem: imgConversae,
    titulo: "Conversaê",
    descricao:
      "Plataforma web voltada para tornar o cuidado com a saúde mental mais acessível, simples e humano.",
    tecnologias: [
      { nome: "Html", icone: iconHTML },
      { nome: "CSS", icone: iconCSS },
      { nome: "JavaScript", icone: iconJs },
    ],
    linkPrevia: "https://conversae.vercel.app/",
    linkRepositorio: "https://github.com/KaueSiqueira54/Conversae",
  },
  {
    id: "nexos",
    imagem: imgNexos,
    titulo: "Nexos da Mente",
    descricao:
      "Portfólio construido para a apresentação do Projeto Nexos da Mente.",
    tecnologias: [
      { nome: "Html", icone: iconHTML },
      { nome: "CSS", icone: iconCSS },
      { nome: "JavaScript", icone: iconJs },
    ],
    linkPrevia: "https://kauesiqueira54.github.io/Nexos-da-Mente/",
    linkRepositorio: "https://github.com/KaueSiqueira54/Nexos-Da-Mente",
  },
  {
    id: "portfolio",
    imagem: imgPortfolio,
    titulo: "Portfolio 1.0",
    descricao:
      "Meu primeiro portfólio pessoal construido utilizando html, css e js.",
    tecnologias: [
      { nome: "Html", icone: iconHTML },
      { nome: "CSS", icone: iconCSS },
      { nome: "JavaScript", icone: iconJs },
    ],
    linkPrevia: "https://kauesiqueira54.github.io/Portfolio1.0/",
    linkRepositorio: "https://github.com/KaueSiqueira54/Portfolio1.0",
  },
];

function App() {
  return (
    <main>
      <Header />
      <Section_um />
      <Section_dois />
      <Section_tres />
      <Certificados certificados={certificados} />
      <Projetos projetos={projetos} />
      <Contatos />
    </main>
  );
}

export default App;
