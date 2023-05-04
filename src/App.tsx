import Main from "./pages/main";
import Tecnologias from "./pages/main/Tecnologias";
import { useState } from "react";
import DisplayMode from "./pages/main/DisplayMode";
import styles from "./App.module.scss";
import classNames from "classnames";
import NavBar from "./pages/main/NavBar";

function App() {
  const [mode, setMode] = useState("dark");

  return (
    <div
      className={classNames({
        [styles.app]: true,
        [styles["app__dark"]]: mode === "dark",
      })}
    >
      <br />
      <NavBar mode={mode} />
      <DisplayMode mode={mode} setMode={setMode} />
      <Main />
      <Tecnologias mode={mode} />
    </div>
  );
}

export default App;
