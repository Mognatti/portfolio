import Main from "./pages/main";
import TechStack from "./pages/main/TechStack";
import { useState } from "react";
import styles from "./App.module.scss";
import classNames from "classnames";
import Header from "./pages/main/Header";
import Projects from "./pages/main/Projects";
import Certificates from "./pages/main/Certificates";
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
      <Header mode={mode} setMode={setMode} />
      <Main mode={mode} />
      <TechStack mode={mode} />
      <Projects mode={mode} />
      <Certificates mode={mode} />
    </div>
  );
}

export default App;
