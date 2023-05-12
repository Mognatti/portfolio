import styles from "./NavBar.module.scss";
import classNames from "classnames";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import ColorTest from "./components/ColorTest";
import Sticky from "./components/Sticky";
import ScrollBack from "./components/ScrollBack";

interface Props {
  mode: string;
}

export default function NavBar({ mode }: Props) {
  return (
    <nav
      className={classNames({
        [styles.nav]: true,
        [styles.nav__sticky]: Sticky(),
        [styles["nav__dark"]]: mode === "dark",
        [styles["nav__dark__sticky"]]: Sticky() && mode === "dark",
      })}
    >
      <div className={styles.nav__title}>
        <p>Bem Vindo!</p>
      </div>

      <ul
        className={classNames({
          [styles.list]: true,
          [styles["list__dark"]]: mode === "dark",
        })}
      >
        <li>
          <a target="_blank" href="https://github.com/Mognatti">
            <IoLogoGithub size="25" color={ColorTest(mode)} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/caio-mognatti/">
            <IoLogoLinkedin size="25" color={ColorTest(mode)} />
          </a>
        </li>
        <ScrollBack mode={mode} />
      </ul>
    </nav>
  );
}
