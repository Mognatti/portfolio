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

const navLinks = [
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
      <DisplayMode {...{ mode, setMode }} />
      <nav className={styles.nav}>
        <ul
          className={classNames({
            [styles.list]: true,
            [styles["list__sticky"]]: sticky,
            [styles["list__dark"]]: mode === "dark",
            [styles["list__dark__sticky"]]: sticky && mode === "dark",
          })}
        >
          {navLinks.map((item) => (
            <li key={item.id}>{item.link}</li>
          ))}
          <li>{yPos > showScrollUpButtonYpos && <IoIosArrowDropup size="25" onClick={() => goTop()} />}</li>
        </ul>
      </nav>
    </header>
  );
}
