# Portfólio — Kauê Siqueira

Meu novo portfólio pessoal, construído em **React** com **Vite**. Reúne minha apresentação, tecnologias, formação, certificados, projetos e formas de contato em uma página única, responsiva e com recursos de acessibilidade.

> Esta é a evolução do meu [Portfolio 2.0](https://kauesiqueira54.github.io/Portfolio/), feito originalmente com HTML, CSS e JavaScript puros.

---

## ✨ Funcionalidades

- **Hero animado:** apresentação com efeito de texto digitando ("Docente de Tecnologia", "Desenvolvedor", "Dev Front-End", "Futuro Full-Stack").
- **Tecnologias:** ícones das principais ferramentas que utilizo, alimentados por um arquivo de dados centralizado.
- **Educação:** linha do tempo com a minha trajetória de formação.
- **Certificados:** carrossel com navegação por setas na tela e pelo teclado (← →), exibindo instituição, tipo, carga horária e conteúdo de cada curso.
- **Projetos:** cards com imagem, descrição, tecnologias usadas, link da prévia e link do repositório.
- **Currículo:** botão para abrir meu currículo em PDF.
- **Menu responsivo:** navegação por âncoras com menu "hambúrguer" no mobile e rolagem suave.
- **Acessibilidade:** integração com o widget **UserWay** e com o **VLibras** (tradução para Libras), além de atributos `aria-*` nos componentes interativos.

---

## 🛠️ Tecnologias

| Categoria | Ferramentas |
| --- | --- |
| Biblioteca | [React 19](https://react.dev/) |
| Build / Dev server | [Vite](https://vite.dev/) |
| Ícones | [React Icons](https://react-icons.github.io/react-icons/) |
| Estilização | CSS Modules + CSS global |
| Qualidade de código | ESLint (com plugins de React Hooks e React Refresh) |
| Fonte | Lato (Google Fonts) |
| Acessibilidade | UserWay e VLibras |

---

## 📁 Estrutura do projeto

```
portfolio_new/
├── public/                  # Arquivos estáticos (favicon)
├── src/
│   ├── components/          # Componentes da interface
│   │   ├── Header.jsx
│   │   ├── Section_um.jsx   # Apresentação (hero)
│   │   ├── Section_dois.jsx # Tecnologias
│   │   ├── Section_tres.jsx # Educação
│   │   ├── Certificados.jsx # Carrossel de certificados
│   │   ├── Projetos.jsx     # Cards de projetos
│   │   ├── Contatos.jsx     # Contatos e redes sociais
│   │   └── TextoDigitando.jsx
│   ├── data/
│   │   └── tecnologias.js   # Mapa de tecnologias → ícone e cor
│   ├── images/              # Imagens organizadas por seção
│   ├── styles/              # CSS Modules por componente
│   ├── App.jsx              # Composição das seções e dados de certificados/projetos
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## ▶️ Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recente, 20.19+ ou 22.12+)
- npm

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/KaueSiqueira54/portfolio_new.git

# 2. Acesse a pasta do projeto
cd portfolio_new

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra o endereço exibido no terminal (por padrão `http://localhost:5173`).

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Visualiza localmente o build de produção |
| `npm run lint` | Executa o ESLint no projeto |

---

## 🧩 Como adicionar conteúdo

**Novo projeto:** em `src/App.jsx`, adicione um objeto ao array `projetos`:

```js
{
  id: "meu-projeto",
  imagem: imgMeuProjeto,
  titulo: "Meu Projeto",
  descricao: "Breve descrição do projeto.",
  tecnologias: ["React", "JavaScript"],
  linkPrevia: "https://...",
  linkRepositorio: "https://github.com/...",
}
```

**Novo certificado:** adicione um objeto ao array `certificados` em `src/App.jsx` com `imagem`, `instituicao`, `titulo`, `tipo`, `cargaHoraria` e `conteudo`.

**Nova tecnologia:** registre o ícone e a cor em `src/data/tecnologias.js` e inclua o nome na lista `SKILLS` de `Section_dois.jsx`.

---

## 📂 Projetos em destaque no portfólio

- **[SinalizaAI](https://www.sinalizaai.com/)** — plataforma digital completa para o projeto SinalizaAI.
- **[Âncora](https://ancora-black.vercel.app/)** — plataforma acadêmica para conectar alunos e monitores.
- **[Conversaê](https://conversae.vercel.app/)** — plataforma web voltada para tornar o cuidado com a saúde mental mais acessível, simples e humano.
- **[Nexos da Mente](https://kauesiqueira54.github.io/Nexos-da-Mente/)** — portfólio de apresentação do Projeto Nexos da Mente.
- **[Portfolio 1.0](https://kauesiqueira54.github.io/Portfolio1.0/)** — meu primeiro portfólio pessoal, feito com HTML, CSS e JavaScript.

---

## 📬 Contato

- LinkedIn: [linkedin.com/in/kauesiqueiradev](https://www.linkedin.com/in/kauesiqueiradev/)
- GitHub: [github.com/KaueSiqueira54](https://github.com/KaueSiqueira54)
- Instagram: [@siqueira_dev54](https://www.instagram.com/siqueira_dev54/)

---

## 📄 Licença e direitos

© 2026 Kauê Siqueira. Todos os direitos reservados.
O código está disponível para consulta; o conteúdo pessoal (textos, imagens, certificados e currículo) não deve ser reutilizado sem autorização.
