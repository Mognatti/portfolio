import { useEffect, useState } from "react";

export default function Sticky() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", turnSticky);
    return () => window.removeEventListener("scroll", turnSticky);
  }, []);

  const turnSticky = () => {
    const windowY = window.scrollY;
    windowY > 0 ? setSticky(true) : setSticky(false);
  };

  return sticky;
}
