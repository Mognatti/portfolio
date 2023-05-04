import styles from "./Projetos.module.scss";
import classNames from "classnames";
import { SiTypescript, SiSass } from "react-icons/si";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import AluroniThumb from "../../../../public/img/Aluroni_Preview.png";

interface Props {
  mode: string;
}

export default function Projetos({ mode }: Props) {
  const projects = [
    {
      title: "Aluroni",
      subtitle: "Cardápio de uma cozinha italiana",
      description:
        "O projeto possui algumas ferramentas para alterar a ordem do cardápio de acordo com critérios estabelecidos pelo cliente, além de seprar os itens por uma label (massas, salada, etc..) e um buscador de itens.",
      madeWith: [
        <SiTypescript size="20" />,
        <SiSass size="20" />,
        <ImHtmlFive size="20" />,
        <ImCss3 size="20" />,
      ],
      preview: AluroniThumb,
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
            className={classNames({
              [styles.link]: true,
              [styles["link__dark"]]: mode === "dark",
            })}
            target="_blank"
            href="https://aluroni-menu.vercel.app/"
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
                  <ul
                    className={classNames({
                      [styles.item__div__text__icons]: true,
                      [styles["item__dark__div__text__icons"]]: mode === "dark",
                    })}
                  >
                    {project.madeWith.map((icon) => (
                      <li>{icon}</li>
                    ))}
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
