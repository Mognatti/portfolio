import { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";

export default function ScrollBack() {
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
    <li>
      {showButton && <IoIosArrowDropup size="25" onClick={() => goTop()} />}
    </li>
  );
}
