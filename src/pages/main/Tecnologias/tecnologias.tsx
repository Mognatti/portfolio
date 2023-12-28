import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { SiTypescript, SiJavascript, SiSass, SiFirebase } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

export const tecnologias = [
  {
    nome: "HTML",
    icon: <ImHtmlFive size="40" />,
    description:
      "Possuo boa proficiência com esta linguagem de marcarção, resposnável por formular o esqueleto base das minhas aplicações.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    nome: "CSS",
    icon: <ImCss3 size="40" />,
    description:
      "Realizei cursos de CSS e me preocupo com a adequada estilização das aplicações que crio, aplicando, inclusive, Material Design.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    nome: "JavaScript",
    icon: <SiJavascript size="40" />,
    description:
      "Responsável por manipular o DOM para criar aplicações com comportamento interativo. É o que faz a 'magia' do site, junto com o CSS!",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    nome: "TypeScript",
    icon: <SiTypescript size="40" />,
    description:
      "Tenho domínio sobre o uso de TypeScript aplicado ao React, sendo capaz de tornar o código mais organizado e menos suscetível a erros durante o seu desenvolvimento",
    link: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },

  {
    nome: "Sass",
    icon: <SiSass size="40" />,
    description:
      "Utilizo essa extensão do CSS em conjunto com o CSS modules para melhor estilizar e organizar as minhas aplicações. Além dele, ainda tenho conhecimento e prática com Styled Components.",
    link: "https://sass-lang.com/",
  },
  {
    nome: "React",
    icon: <FaReact size="40" />,
    description:
      "Principal ferramenta que utilizo atualmente. Sou capaz de realizar testes em Jest, tenho conhecimento sobre diversas bibliotecas e posso aprender novas com facilidade.",
    link: "https://react.dev/learn",
  },

  {
    nome: "NodeJs",
    icon: <FaNodeJs size="40" />,
    description:
      "Ferramenta criada para possibilitar o uso do JavaScript server-side, sou capaz utilizá-la com o framework 'Express'",
    link: "https://nodejs.org/en/docs",
  },
  {
    nome: "Firebase",
    icon: <SiFirebase size="40" />,
    description: "Ferramenta que utilizo atualmente para lidar com autenticação de usuários e/ou banco de dados.",
    link: "https://firebase.google.com/docs/guides?hl=pt-br",
  },
  {
    nome: "GitHub",
    icon: <IoLogoGithub size="40" />,
    description:
      "Utilizo o GitHub como ferramenta de controle de versão. Sou capaz de trabalhar com a equipe para transformar nossos 'commits' em 'pushes' e 'merges'",
    link: "https://docs.github.com/pt",
  },
];
