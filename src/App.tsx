import Main from "./pages/main";
import Tecnologias from "./pages/main/Tecnologias";
import { useState } from "react";
import styles from "./App.module.scss";
import classNames from "classnames";
import NavBar from "./pages/main/NavBar";
import Projetos from "./pages/main/Projetos";
import CursosECertificados from "./pages/main/CursosECertificados";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [mode, setMode] = useState("dark");

  return (
    <div
      className={classNames({
        [styles.app]: true,
        [styles["app__dark"]]: mode === "dark",
      })}
    >
      <Analytics />
      <NavBar mode={mode} setMode={setMode} />
      <Main mode={mode} />
      <Tecnologias mode={mode} />
      <Projetos mode={mode} />
      <CursosECertificados mode={mode} />
    </div>
  );
}

export default App;
