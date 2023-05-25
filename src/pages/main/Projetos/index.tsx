import styles from "./Projetos.module.scss";
import classNames from "classnames";
import { SiTypescript, SiSass, SiJest } from "react-icons/si";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import AluroniThumb from "../../../../public/img/Aluroni_Preview.png";
import AmigoSecretoThumb from "../../../../public/img/Amigo_Secreto_Preview.png";

interface Props {
  mode: string;
}

export default function Projetos({ mode }: Props) {
  const projects = [
    {
      title: "Aluroni",
      subtitle: "Cardápio de uma cozinha italiana",
      description:
        "O projeto possui algumas ferramentas para alterar a ordem do cardápio de acordo com critérios estabelecidos pelo cliente, além de seprar os itens por uma label (massas, salada, etc..) e um buscador de itens. Para a melhor navegação pela aplicação, foi implementada a biblioteca 'React Router'",
      madeWith: [
        <FaReact size="20" />,
        <ImHtmlFive size="20" />,
        <SiSass size="20" />,
        <SiTypescript size="20" />,
      ],
      link: "https://aluroni-menu.vercel.app/",
      preview: AluroniThumb,
    },
    {
      title: "Sorteador amigo de secreto",
      subtitle: "Randomiza uma lista e correlaciona os elementos",
      description:
        "A aplicação foi criada em React utilizando o método TDD (Test Driven Development) através da combinação da biblioteca Jest e da testing library do react para garantir o adequado funcionamento da mesma. Além disso, as bibliotecas react-router-dom e recoil foram utilizadas. Com essa aplicação é possível criar uma lista de participantes de um sorteio e formar uma relação entre um indivíduo (sorteador) com outro (sorteado) de maneira que é impossível realizar o sorteio caso não seja atingido o número mínimo de participantes e que, de nenhuma forma, será possível que mais de um participante tire a mesma pessoa e nem ele mesmo.",
      madeWith: [
        <FaReact size="20" />,
        <ImHtmlFive size="20" />,
        <ImCss3 size="20" />,
        <SiTypescript size="20" />,
        <SiJest size="20" />,
      ],
      link: "https://amigo-secreto-alura.vercel.app/ ",
      preview: AmigoSecretoThumb,
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
        <p> Meus Projetos </p>
      </div>
      <ul className={styles.list}>
        {projects.map((project) => (
          <a
            key={project.title}
            className={classNames({
              [styles.link]: true,
              [styles["link__dark"]]: mode === "dark",
            })}
            target="_blank"
            href={project.link}
          >
            <li
              className={classNames({
                [styles.item]: true,
                [styles["item__dark"]]: mode == "dark",
              })}
            >
              <div
                className={classNames({
                  [styles.item__div]: true,
                  [styles["item__dark__div"]]: mode == "dark",
                })}
              >
                <div
                  className={classNames({
                    [styles.item__div__text]: true,
                    [styles["item__dark__div__text"]]: mode === "dark",
                  })}
                >
                  <p
                    className={classNames({
                      [styles.item__div__text__title]: true,
                      [styles["item__dark__div__text__title"]]: mode === "dark",
                    })}
                  >
                    {project.title}
                    <span
                      className={classNames({
                        [styles.item__div__text__subtitle]: true,
                        [styles["item__dark__div__text__subtitle"]]:
                          mode === "dark",
                      })}
                    >
                      {" - " + project.subtitle}
                    </span>
                  </p>
                  <p>{project.description}</p>
                  <ul className={styles.item__div__text__list}>
                    <p
                      className={classNames({
                        [styles.item__div__text__icons]: true,
                        [styles["item__dark__div__text__icons"]]:
                          mode === "dark",
                      })}
                    >
                      Tecnologias usadas:
                      {project.madeWith.map((icon) => (
                        <li key={Math.random()}>{icon}</li>
                      ))}
                    </p>
                  </ul>
                </div>
                <img
                  className={styles.item__div__img}
                  src={project.preview}
                  alt="Thumb do Projeto"
                ></img>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
}
