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
    <section className={styles.main} id="sobre">
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
            Estudante do segundo semestre de Engenharia de Software, ingressei no mundo da tecnologia em 2022, estudando
            Python. Depois disso, aprendi JavaScript e React, chegando depois no Node.js e no TypeScript. Realizei
            alguns projetos tanto pessoais quanto para clientes e tornei-me um desenvolvedor Full-Stack. Estudo
            continuamente as ferramentas de desenvolvimento para me tornar um profissional mais completo, capaz de criar
            soluções úteis e centradas nos clientes. Sou bem comunicativo e gosto muito de aprender mais sobre as novas
            tecnologias para melhorar a minha capacidade de colaborar com a equipe e com o sucesso dos projetos.
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
