import styles from "./DisplayMode.module.scss";
import classNames from "classnames";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

interface Props {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export default function DisplayMode({ mode, setMode }: Props) {
  const handleClickMode = () => {
    mode == "dark" ? setMode("ligth") : setMode("dark");
  };

  return (
    <div className={styles.mode__container}>
      <button
        className={classNames({
          [styles.mode]: true,
          [styles["mode__dark"]]: mode == "dark",
        })}
        onClick={() => handleClickMode()}
      >
        {mode === "dark" ? (
          <MdDarkMode size="20" className={styles.mode__icon__dark} />
        ) : (
          <MdLightMode size="20" className={styles.mode__icon} />
        )}
      </button>
    </div>
  );
}
