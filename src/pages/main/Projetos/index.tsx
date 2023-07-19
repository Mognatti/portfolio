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
            className={styles.card}
            href={project.linkHost}
            target="_blank"
          >
            <div className={styles.image}>
              <img src={project.preview} />
            </div>
            <div className={styles.details}>
              <div className={styles.center}>
                <h4>
                  {project.title}
                  <span> - {project.subtitle}</span>
                </h4>
                <p>{project.description}</p>
                <ul>
                  {project.madeWith.map((icon) => (
                    <li key={icon.key}>{icon}</li>
                  ))}
                  <li>
                    <a href={project.linkProjeto} target="_blank">
                      <IoLogoGithub className={styles.git} size="20" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        ))}
      </ul>
    </section>
  );
}
