import { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import styles from "./ScrollBack.module.scss";
import classNames from "classnames";

interface Props {
  mode: string;
}

export default function ScrollBack({ mode }: Props) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false)
    );
  }, []);

  const goTop = () =>
    window.scrollTo({
      top: 0,
    });

  return (
    <li
      className={classNames({
        [styles.button]: true,
        [styles["button__dark"]]: mode === "dark",
      })}
    >
      {showButton && <IoIosArrowDropup size="25" onClick={() => goTop()} />}
    </li>
  );
}
