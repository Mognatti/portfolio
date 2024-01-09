import styles from "./Projetcs.module.scss";
import classNames from "classnames";
import { projectList } from "./projectList";
import { IoLogoGithub } from "react-icons/io";

interface Props {
  mode: string;
}

export default function Projects({ mode }: Props) {
  return (
    <section className={styles.container} id="projetos">
      <div
        className={classNames({
          [styles.title]: true,
          [styles["title__dark"]]: mode === "dark",
        })}
      >
        <p> Meus Projetos </p>
      </div>
      <ul className={styles.list}>
        {projectList.map((project) => (
          <a key={project.title} className={styles.card} href={project.linkHost} target="_blank">
            <div className={styles.image}>
              <img src={project.preview} alt="project preview " />
            </div>
            <div className={styles.details}>
              <div
                className={classNames({
                  [styles.center]: true,
                  [styles.center__dark]: mode === "dark",
                })}
              >
                <h4>
                  {project.title}
                  <span> - {project.subtitle}</span>
                </h4>
                <p>{project.description}</p>
                <ul className={styles.icon__list}>
                  {project.madeWith.map((icon) => (
                    <li key={icon.key}>{icon}</li>
                  ))}
                  <li>
                    <a href={project.linkProjeto} target="_blank">
                      <IoLogoGithub
                        className={classNames({
                          [styles.git]: true,
                          [styles.git__dark]: mode === "dark",
                        })}
                        size="20"
                      />
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
