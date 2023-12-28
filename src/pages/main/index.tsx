import styles from "./Main.module.scss";
import classNames from "classnames";
import photo from "../../assets/foto_pessoal.jpg";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";

interface Props {
  mode: string;
}

export default function Main({ mode }: Props) {
  const contatos = [
    {
      id: 1,
      link: (
        <a href="https://github.com/Mognatti" target="_blank" key="github-contato">
          <IoLogoGithub
            size="30"
            className={classNames({
              [styles.git]: true,
              [styles["git__dark"]]: mode === "dark",
            })}
          />
        </a>
      ),
    },
    {
      id: 2,
      link: (
        <a target="_blank" href="https://www.linkedin.com/in/caio-mognatti/" key="linkedin-contato">
          <IoLogoLinkedin
            size="30"
            className={classNames({
              [styles.linkedin]: true,
              [styles["linkedin__dark"]]: mode === "dark",
            })}
          />
        </a>
      ),
    },
    {
      id: 3,
      link: (
        <a target="_blank" href="mailto:caiocsm97@gmail.com" key="email-contato">
          <SiGmail
            size="30"
            className={classNames({
              [styles.email]: true,
              [styles["email__dark"]]: mode === "dark",
            })}
          />
        </a>
      ),
    },
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
        <img src={photo} className={styles.about__photo} alt="profile_picture" />
        <div
          className={classNames({
            [styles.about__description]: true,
            [styles["about__description__dark"]]: mode === "dark",
          })}
        >
          <p>
            Desenvolvedor Web Full Stack, comecei a estudar programação em 2022. Sou formado em biomedicina e já cheguei
            a lecionar na área, mas optei por trocar de carreira assim que conheci mais afundo as tarefas de um dev.
            Sempre tive interesse na área de tecnologia e, quando resolvi estudar, me apaixonei. Sinto que encontrei
            minha vocação e estou muito feliz com a possibilidade de trabalhar com aquilo que realmente gosto. Ainda
            tenho muito a aprender, mas não me falta determinação para tal! Estudo diariamente e desejo me diferenciar
            cada vez mais.
          </p>
        </div>
        <div className={styles.about__description__icons}>
          {contatos.map((item) => (
            <span key={item.id}>{item.link}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
