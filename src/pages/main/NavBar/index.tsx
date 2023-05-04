import styles from "./NavBar.module.scss";
import classNames from "classnames";

interface Props {
  mode: string;
}

export default function NavBar({ mode }: Props) {
  return (
    <nav
      className={classNames({
        [styles.nav]: true,
        [styles["nav__dark"]]: mode === "dark",
      })}
    >
      <ul>
        <li>Bem Vindo!</li>
      </ul>
    </nav>
  );
}
