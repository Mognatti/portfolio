import { tecnologias } from "./tecnologias";
import styles from "./Tecnologias.module.scss";
import classNames from "classnames";

interface Props {
  mode: string;
}

export default function Tecnologias({ mode }: Props) {
  return (
    <section className={styles.container} id="tech_stack">
      <div
        className={classNames({
          [styles.title]: true,
          [styles["title__dark"]]: mode === "dark",
        })}
      >
        <p>Tech Stack</p>
      </div>

      <ul className={styles.list}>
        {tecnologias.map((tecnologia) => {
          return (
            <li
              key={tecnologia.nome}
              className={classNames({
                [styles.item]: true,
                [styles["item__dark"]]: mode === "dark",
              })}
            >
              <a className={styles.link} target="_blank" href={tecnologia.link}>
                <p>{tecnologia.icon}</p>
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
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
