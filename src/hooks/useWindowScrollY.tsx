import { useEffect, useState } from "react";

export default function useWindowScrollY() {
  const [sticky, setSticky] = useState(false);
  const [yPos, setYPos] = useState(window.scrollY);

  useEffect(() => {
    const turnSticky = () => {
      setYPos(window.scrollY);
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", turnSticky);
    return () => window.removeEventListener("scroll", turnSticky);
  }, [yPos]);

  const goTop = () =>
    window.scrollTo({
      top: 0,
    });

  return { sticky, yPos, goTop };
}
