import styles from "./CursosECertificados.module.scss";
import classNames from "classnames";
import { certificados } from "./certificadosLista";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";

interface Props {
  mode: string;
}

export default function CursosECertificados({ mode }: Props) {
  const list = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    list.current?.scrollBy({ left: -1470, behavior: "smooth" });
  };

  const scrollRight = () => {
    list.current?.scrollBy({ left: +1470, behavior: "smooth" });
  };

  return (
    <section className={styles.container}>
      <div
        id="container"
        className={classNames({
          [styles.title]: true,
          [styles.title__dark]: mode === "dark",
        })}
      >
        <p> Certificados de Cursos </p>
      </div>
      <div className={styles.list__container}>
        <div className={styles.move__left}>
          <MdChevronLeft size={30} onClick={scrollLeft} />
        </div>
        <ul ref={list} className={classNames({ [styles.list]: true })}>
          {certificados.map((certificado) => (
            <li key={certificado.nome}>
              <a href={certificado.link} target="_blank">
                <img src={certificado.img} alt="Imagem do certificado" />
              </a>
              <p>{certificado.nome}</p>
            </li>
          ))}
        </ul>
        <div className={styles.move__right}>
          <MdChevronRight size={30} onClick={scrollRight} />
        </div>
      </div>
    </section>
  );
}
