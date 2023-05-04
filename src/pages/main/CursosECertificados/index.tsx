import styles from "./CursosECertificados.module.scss";
import classNames from "classnames";

export default function CursosECertificados() {
  return (
    <div className={styles.container}>
      <p
        className={classNames({
          [styles.title]: true,
        })}
      >
        Cursos e Certificados
      </p>
      <ul
        className={classNames({
          [styles.list]: true,
        })}
      ></ul>
    </div>
  );
}
