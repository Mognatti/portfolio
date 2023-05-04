import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { SiTypescript, SiJavascript, SiSass } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import styles from "./Tecnologias.module.scss";
import classNames from "classnames";

interface Props {
  mode: string;
}

export default function Tecnologias({ mode }: Props) {
  const tecnologias = [
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
        "Realizei cursos de CSS e me peocuopo com a adequada estilização das aplicações que crio, insclusive aplicando Material Design.",
    },
    {
      nome: "Sass",
      icon: <SiSass size="40" />,
      description:
        "Utilizo essa extenção o CSS em conjunto com o CSS modules para melhor estilizar e organizar as minhas aplicações. Além dele, ainda tenho conhecimento e prática com Styled Components.",
    },
    {
      nome: "JavaScript",
      icon: <SiJavascript size="40" />,
      description:
        "Seja JS nativo ou através da biblioteca JSX, sou capaz de manipular o DOM para criar aplicações com comportamento interativo, priorizando a UX",
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
        "Principal ferramente que utilizo atualmente. Tenho domínio sobre as pricipais bibliotecas e posso aprender novas com facilidade.",
    },
    {
      nome: "GitHub",
      icon: <IoLogoGithub size="40" />,
      description:
        "Utilizo o GitHub como ferramenta de controle de versão. Sou capaz de trabalhar com a equipe para transformar nossos 'commits' em 'pushes' e 'merges' :) ",
    },
  ];

  return (
    <section className={styles.container}>
      <div
        className={classNames({
          [styles.title]: true,
          [styles["title__dark"]]: mode === "dark",
        })}
      >
        <p>Tecnologias e Ferramentas</p>
      </div>
      <div>
        <ul className={styles.list}>
          {tecnologias.map((tecnologia) => (
            <li
              key={tecnologia.nome}
              className={classNames({
                [styles.item]: true,
                [styles["item__dark"]]: mode === "dark",
              })}
            >
              {tecnologia.icon}

              <p
                className={classNames({
                  [styles.item__name]: true,
                  [styles["item__name__dark"]]: mode === "dark",
                })}
              >
                {tecnologia.nome}
              </p>

              <p
                className={classNames({
                  [styles.item__description]: true,
                  [styles["item__description__dark"]]: mode === "dark",
                })}
              >
                {tecnologia.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
