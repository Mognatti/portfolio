import styles from "./Certificates.module.scss";
import classNames from "classnames";
import { certificados } from "./certificateList";
import { useEffect, useRef, useState } from "react";

interface Props {
  mode: string;
}

export default function Certificates({ mode }: Props) {
  const list = useRef<HTMLUListElement | null>(null);
  const scroller = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(true);
    }
  }, []);

  return (
    <section className={styles.container} id="cursos">
      <div
        id="container"
        className={classNames({
          [styles.title]: true,
          [styles.title__dark]: mode === "dark",
        })}
      >
        <p> Certificados de Cursos </p>
      </div>

      <div className={classNames({ [styles.scroller]: true, [styles.scroller__animated]: animate })} ref={scroller}>
        <ul ref={list} className={classNames({ [styles.scroller__inner]: true })}>
          {certificados.map((certificado) => (
            <li key={certificado.nome}>
              <a href={certificado.link} target="_blank">
                <img src={certificado.img} alt="Imagem do certificado" />
              </a>
            </li>
          ))}
          {/* dupe for animation */}
          {certificados.map((certificado) => (
            <li key={certificado.link}>
              <a href={certificado.link} target="_blank">
                <img src={certificado.img} alt="Imagem do certificado" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
