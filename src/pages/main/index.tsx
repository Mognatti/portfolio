import styles from "./Main.module.scss";
import gif from "C:/Users/Caio Mognatti/Documents/Estudos e Livros/Portfolio/Portfolio/src/assets/coding_gif.gif";

export default function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.intro}>
        <p className={styles.intro__title}></p>
        <p className={styles.intro__description}>
          Me chamo Caio Mognatti, nasci em 1997, e comecei no mundo da promação
          em 2022. Sempre tive interesse na área de tecnologia, mas acabei
          seguindo por um caminho diferente durante um bom tempo, até que eu
          finalmente tomei a decisão de estudar programação. Sinto que encontrei
          minha vocação e estou muito feliz com a possiblidade de trabalhar com
          aquilo que realmente gosto. Ainda tenho muito a aprender, mas não me
          falta determinação para tal! Estudo diariamente e desejo me
          diferenciar cada vez mais.
        </p>
      </div>
      <div className={styles.gif__container}>
        <img className={styles.gif} src={gif} alt="coding_gif"></img>
      </div>
    </section>
  );
}
