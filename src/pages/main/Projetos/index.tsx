import styles from "./Projetos.module.scss";
import classNames from "classnames";
import { projects } from "./projetos";
import { IoLogoGithub } from "react-icons/io";

interface Props {
  mode: string;
}

export default function Projetos({ mode }: Props) {
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
            href={project.linkHost}
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
                  <div>
                    <p>{project.description}</p>
                    <p className={styles.item__div__text__tecnologias}>
                      Tecnologias usadas:
                    </p>
                    <ul className={styles.item__div__text__list}>
                      {project.madeWith.map((icon) => (
                        <li
                          key={Math.random()}
                          className={classNames({
                            [styles.item__div__text__list__icons]: true,
                            [styles["item__dark__div__text__icons"]]:
                              mode === "dark",
                          })}
                        >
                          {icon}
                        </li>
                      ))}
                      <a
                        href={project.linkProjeto}
                        target="_blank"
                        className={styles["git-link"]}
                      >
                        <li className={styles.item__div__text__list__icons}>
                          <IoLogoGithub size="20" />
                        </li>
                      </a>
                    </ul>
                  </div>
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
