import styles from "./NavBar.module.scss";
import classNames from "classnames";
import { IoIosArrowDropup, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import useWindowScrollY from "../../../hooks/useWindowScrollY";
import DisplayMode from "../DisplayMode";

interface Props {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const showScrollUpButtonYpos = 500;

const outLinks = [
  {
    id: "linkedin",
    link: (
      <a target="_blank" href="https://www.linkedin.com/in/caio-mognatti/">
        <IoLogoLinkedin size="25" />
      </a>
    ),
  },
  {
    id: "github",
    link: (
      <a target="_blank" href="https://github.com/Mognatti">
        <IoLogoGithub size="25" />
      </a>
    ),
  },
];

const innerLinks = [
  {
    id: "sobre",
    scr: "#sobre",
    title: "Sobre Mim",
  },
  {
    id: "tecnologias",
    scr: "#tech_stack",
    title: "Tech Stack",
  },
  {
    id: "projetos",
    scr: "#projetos",
    title: "Projetos",
  },
  {
    id: "certificados",
    scr: "#cursos",
    title: "Certificados",
  },
];

export default function NavBar({ mode, setMode }: Props) {
  const { sticky, yPos, goTop } = useWindowScrollY();

  return (
    <header
      className={classNames({
        [styles.header]: true,
        [styles.header__sticky]: sticky,
        [styles.header__dark]: mode === "dark",
        [styles.header__dark__sticky]: mode === "dark" && sticky,
      })}
    >
      <div className={styles.title}>
        <p>Caio Mognatti</p>
      </div>
      <nav
        className={classNames({
          [styles.inner_links]: true,
          [styles.inner_links__dark]: mode === "dark",
          [styles.inner_links__sticky]: sticky,
        })}
      >
        {innerLinks.map((link) => (
          <a key={link.id} href={link.scr}>
            {link.title}
          </a>
        ))}
      </nav>
      <DisplayMode {...{ mode, setMode }} />
      <nav className={styles.out_links}>
        <ul
          className={classNames({
            [styles.list]: true,
            [styles["list__sticky"]]: sticky,
            [styles["list__dark"]]: mode === "dark",
            [styles["list__dark__sticky"]]: sticky && mode === "dark",
          })}
        >
          {outLinks.map((item) => (
            <li key={item.id}>{item.link}</li>
          ))}
          <li>{yPos > showScrollUpButtonYpos && <IoIosArrowDropup size="25" onClick={() => goTop()} />}</li>
        </ul>
      </nav>
    </header>
  );
}
