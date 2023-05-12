import styles from "./NavBar.module.scss";
import classNames from "classnames";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
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
        <p>Caio Mognatti</p>
      </div>

      <ul
        className={classNames({
          [styles.list]: true,
          [styles["list__sticky"]]: Sticky(),
          [styles["list__dark"]]: mode === "dark",
          [styles["list__dark__sticky"]]: Sticky() && mode === "dark",
        })}
      >
        <li>
          <a target="_blank" href="https://github.com/Mognatti">
            <IoLogoGithub size="25" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/caio-mognatti/">
            <IoLogoLinkedin size="25" />
          </a>
        </li>
        <a>
          <ScrollBack />
        </a>
      </ul>
    </nav>
  );
}
