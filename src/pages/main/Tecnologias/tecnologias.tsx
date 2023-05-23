import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import {
  SiTypescript,
  SiJavascript,
  SiSass,
  SiPostgresql,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

export const tecnologias = [
  {
    nome: "HTML",
    icon: <ImHtmlFive size="40" />,
    description:
      "Possuo boa proficiência com esta linguagem de marcarção, resposnável por formular o esqueleto base das minhas aplicações.",
  },
  {
    nome: "CSS",
    icon: <ImCss3 size="40" />,
    description:
      "Realizei cursos de CSS e me preocupo com a adequada estilização das aplicações que crio, aplicando, inclusive, Material Design.",
  },
  {
    nome: "Sass",
    icon: <SiSass size="40" />,
    description:
      "Utilizo essa extensão do CSS em conjunto com o CSS modules para melhor estilizar e organizar as minhas aplicações. Além dele, ainda tenho conhecimento e prática com Styled Components.",
  },
  {
    nome: "JavaScript",
    icon: <SiJavascript size="40" />,
    description:
      "Seja JS nativo ou através da biblioteca JSX, sou capaz de manipular o DOM para criar aplicações com comportamento interativo, priorizando a experiência do usuário (UX)",
  },
  {
    nome: "TypeScript",
    icon: <SiTypescript size="40" />,
    description:
      "Tenho domínio sobre o uso de TypeScript aplicado ao React, sendo capaz de tornar o código mais organizado e menos suscetível a erros durante o seu desenvolvimento",
  },
  {
    nome: "React",
    icon: <FaReact size="40" />,
    description:
      "Principal ferramenta que utilizo atualmente. Sou capaz de realizar testes em Jest, tenho conhecimento sobre diversas bibliotecas e posso aprender novas com facilidade.",
  },
  {
    nome: "GitHub",
    icon: <IoLogoGithub size="40" />,
    description:
      "Utilizo o GitHub como ferramenta de controle de versão. Sou capaz de trabalhar com a equipe para transformar nossos 'commits' em 'pushes' e 'merges' :) ",
  },
  {
    nome: "NodeJs",
    icon: <FaNodeJs size="40" />,
    description:
      "Ferramenta criada para possibilitar o uso do JavaScript server-side, sou capaz utilizá-la com o framework 'Express'",
  },
];
