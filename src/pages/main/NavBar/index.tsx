import styles from "./NavBar.module.scss";
import classNames from "classnames";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

interface Props {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavBar({ mode }: Props) {
  const colorTest = (color: string) => {
    color = mode === "dark" ? "black" : "white";
    return color;
  };

  return (
    <nav
      className={classNames({
        [styles.nav]: true,
        [styles["nav__dark"]]: mode === "dark",
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
            <IoLogoGithub size="25" color={colorTest("")} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/caio-mognatti/">
            <IoLogoLinkedin size="25" color={colorTest("")} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
