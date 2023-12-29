import styles from "./DisplayMode.module.scss";
import classNames from "classnames";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useWindowScrollY from "../../../hooks/useWindowScrollY";

interface Props {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export default function DisplayMode({ mode, setMode }: Props) {
  const { sticky } = useWindowScrollY();
  const handleClickMode = () => {
    mode == "dark" ? setMode("ligth") : setMode("dark");
  };

  return (
    <div className={styles.button__container}>
      <button
        className={classNames({
          [styles.mode]: true,
          [styles.mode__sticky]: sticky,
          [styles["mode__dark"]]: mode == "dark",
        })}
        onClick={() => handleClickMode()}
      >
        {mode === "dark" ? (
          <MdDarkMode size="18" className={styles.mode__icon__dark} />
        ) : (
          <MdLightMode size="18" className={styles.mode__icon} />
        )}
      </button>
    </div>
  );
}
