import styles from "./Main.module.scss";
import classNames from "classnames";
import photo from "../../assets/foto_pessoal.jpg";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

interface Props {
  mode: string;
}

export default function Main({ mode }: Props) {
  const contatos = [
    <a href="https://github.com/Mognatti" target="_blank">
      <IoLogoGithub
        size="30"
        className={classNames({
          [styles.git]: true,
          [styles["git__dark"]]: mode === "dark",
        })}
      />
    </a>,
    <a target="_blank" href="https://www.linkedin.com/in/caio-mognatti/">
      <IoLogoLinkedin
        size="30"
        className={classNames({
          [styles.linkedin]: true,
          [styles["linkedin__dark"]]: mode === "dark",
        })}
      />
    </a>,
  ];

  return (
    <section className={styles.main}>
      <div className={styles.intro}>
        <p
          className={classNames({
            [styles.intro__title]: true,
            [styles["intro__title__dark"]]: mode === "dark",
          })}
        ></p>
      </div>
      <div className={styles.about}>
        <img src={photo} className={styles.about__photo} />
        <div
          className={classNames({
            [styles.about__description]: true,
            [styles["about__description__dark"]]: mode === "dark",
          })}
        >
          <p>
            Desenvolvedor Web Full Stack, comecei a estudar programação em 2022.
            Sou formado em biomedicina e já cheguei a lecionar na área, mas
            optei por trocar de carreira assim que conheci mais afundo as
            tarefas de um dev. Sempre tive interesse na área de tecnologia e,
            quando resolvi estudar, me apaixonei. Sinto que encontrei minha
            vocação e estou muito feliz com a possibilidade de trabalhar com
            aquilo que realmente gosto. Ainda tenho muito a aprender, mas não me
            falta determinação para tal! Estudo diariamente e desejo me
            diferenciar cada vez mais.
          </p>
        </div>
        <div className={styles.about__description__icons}>
          {contatos.map((icon) => (
            <span
              className={classNames({
                [styles.about__description__icon]: true,
              })}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
