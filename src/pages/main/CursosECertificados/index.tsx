import styles from "./CursosECertificados.module.scss";
import classNames from "classnames";
import JsLocalStorage from "../../../assets/certificado_JS_na_web_localstorage.png";
import JsPagDin from "../../../assets/certificado_JS_na_web_pags_dinamicas.png";
import JsApi from "../../../assets/JAVASCRIPT_CONSUMINDO_E_TRATANDO_DADOS_DE_UMA_API.png";
import JsManDom from "../../../assets/JAVASCRIPT_MANIPULANDO_O_DOM.png";
import LogPong from "../../../assets/LÓGICA_DE_PROGRAMAÇÃO_COMECE_EM_LÓGICA_COM_O_JOGO_PONG_E_JAVASCRIPT.png";
import NodeExp from "../../../assets/NODE.JS_ CONTINUE_SEU_PROJETO_FULL_STACK_CRIANDO_UMA_API_COM_EXPRESS.png";
import ReactFull from "../../../assets/REACT_COMECE_SEU_PROJETO_FULL_STACK.png";
import ReactJs from "../../../assets/REACT_DESENVOLVENDO_COM_JAVASCRIPT.png";
import ReactEst from "../../../assets/REACT_LIDANDO_COM_ARQUIVOS_ESTÁTICOS.png";
import TsPartOne from "../../../assets/TYPESCRIPT_PARTE_1_EVOLUINDO_SEU_JAVASCRIPT.png";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useState } from "react";

interface Props {
  mode: string;
}

export default function CursosECertificados({ mode }: Props) {
  const certificados = [
    {
      nome: "JavaScript - Armazenando Dados no navegador (local storage)",
      link: "https://cursos.alura.com.br/certificate/80976c10-b112-4e82-8706-593317491d6d",
      img: JsLocalStorage,
    },
    {
      nome: "JavaScript - Crie páginas dinâmicas ",
      link: "https://cursos.alura.com.br/certificate/410bde50-ffe9-4544-84ba-7a6084c759a9",
      img: JsPagDin,
    },
    {
      nome: "JavaScript - Consumindo e tratando dados de uma API",
      link: "https://cursos.alura.com.br/certificate/a1434b74-2752-44ae-a55b-4e51a643d2f0",
      img: JsApi,
    },
    {
      nome: "JavaScript - Manipulando o DOM",
      link: "https://cursos.alura.com.br/certificate/30091fc1-8146-49eb-b387-b8a8b17c3f5a",
      img: JsManDom,
    },
    {
      nome: "Lógica de Porgramação - Recriação do jogo Pong em JS",
      link: "https://cursos.alura.com.br/certificate/5899cf4e-9347-4ef8-85f0-e84d3d90c04a",
      img: LogPong,
    },
    {
      nome: "NODE.JS - Continue seu projeto FULL-STACK criando uma API com express",
      link: "https://cursos.alura.com.br/certificate/899001db-9178-4519-85ec-a6d30fe077ce",
      img: NodeExp,
    },
    {
      nome: "REACT - Comece seu projeto FULL STACK",
      link: "https://cursos.alura.com.br/certificate/2431acbf-22c5-4f21-9070-dba4649e1746",
      img: ReactFull,
    },
    {
      nome: "REACT - Desenvolvendo com JavaScript",
      link: "https://cursos.alura.com.br/certificate/beb4cc6d-f128-4767-8e1a-4051f51998c8",
      img: ReactJs,
    },
    {
      nome: "REACT - Lidando com arquivos estáticos",
      link: "https://cursos.alura.com.br/certificate/7c27fea9-abef-4cf1-bb94-7502fcb00a03",
      img: ReactEst,
    },
    {
      nome: "TypeScript I: Evoluindo seu JavaScript",
      link: "https://cursos.alura.com.br/certificate/61f7e00d-de3e-47ad-82a7-81e95e434a37",
      img: TsPartOne,
    },
  ];
  const [index, setIndex] = useState(0);

  function addIndex(index: number) {
    index === certificados.length - 1 ? setIndex(0) : setIndex(index + 1);
    console.log(index);
  }

  function subIndex(index: number) {
    index === 0 ? setIndex(certificados.length - 1) : setIndex(index - 1);
    console.log(index);
  }

  return (
    <section className={styles.container}>
      <div
        className={classNames({
          [styles.title]: true,
          [styles.title__dark]: mode === "dark",
        })}
      >
        <p> Certificados de Cursos </p>
      </div>
      <div className={classNames({ [styles.list]: true })}>
        <button
          className={classNames({
            [styles.button__prev]: true,
          })}
          onClick={() => subIndex(index)}
        >
          <IoIosArrowDropleftCircle size="40" />
        </button>

        <img
          className={classNames({
            [styles.list__prev]: true,
            [styles.list__prev__dark]: mode === "dark",
          })}
          src={
            certificados[index === 0 ? certificados.length - 1 : index - 1].img
          }
          alt="Imagem do certificado"
          onClick={() => subIndex(index)}
        ></img>

        <a href={certificados[index].link} target="_blank">
          <img
            className={classNames({
              [styles.list__current]: true,
              [styles.list__current__dark]: mode === "dark",
            })}
            src={certificados[index].img}
            alt="Imagem do certificado"
          ></img>{" "}
          <p
            className={classNames({
              [styles.list__current__title]: true,
              [styles["list__dark__current__title"]]: mode === "dark",
            })}
          >
            {certificados[index].nome}
          </p>
        </a>

        <img
          className={classNames({
            [styles.list__next]: true,
            [styles.list__next__dark]: mode === "dark",
          })}
          src={
            certificados[index === certificados.length - 1 ? 0 : index + 1].img
          }
          alt="Imagem do certificado"
          onClick={() => addIndex(index)}
        ></img>

        <button
          className={classNames({
            [styles.button__next]: true,
          })}
          onClick={() => addIndex(index)}
        >
          <IoIosArrowDroprightCircle size="40" />
        </button>
      </div>
    </section>
  );
}
