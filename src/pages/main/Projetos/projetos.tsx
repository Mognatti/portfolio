import {
  SiTypescript,
  SiSass,
  SiJest,
  SiStyledcomponents,
} from "react-icons/si";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import AluroniThumb from "../../../../public/img/Aluroni_Preview.png";
import AmigoSecretoThumb from "../../../../public/img/Amigo_Secreto_Preview.png";
import GamelistThumb from "../../../../public/img/Gamelist_Preview.png";
import Meteorathumb from "../../../../public/img/Meteora_Preview.png";

export const projects = [
  {
    title: "Aluroni",
    subtitle: "Cardápio de uma cozinha italiana",
    description:
      "O projeto possui algumas ferramentas para alterar a ordem do cardápio de acordo com critérios estabelecidos pelo cliente, além de filtrar os itens por categoria ou texto. Para a melhor navegação pela aplicação, foi implementada a biblioteca 'React Router'",
    madeWith: [
      <FaReact key="react-icon" size="20" />,
      <ImHtmlFive key="html-icon" size="20" />,
      <SiSass key="sass-icon" size="20" />,
      <SiTypescript key="ts-icon" size="20" />,
    ],
    linkHost: "https://aluroni-menu.vercel.app/",
    linkProjeto: "https://github.com/Mognatti/Aluroni",
    preview: AluroniThumb,
  },
  {
    title: "Sorteador amigo de secreto",
    subtitle: "Relação entre listas",
    description:
      "Permite criar uma lista de participantes de um sorteio, sendo impossível realizar o mesmo caso não seja atingido o número mínimo de participantes e nem que mais de um participante tire a mesma pessoa e ou ele mesmo. A aplicação foi criada utilizando TDD (Test Driven Development) com a biblioteca Jest.",
    madeWith: [
      <FaReact key="react-icon" size="20" />,
      <ImHtmlFive key="html-icon" size="20" />,
      <ImCss3 key="css-icon" size="20" />,
      <SiTypescript key="ts-icon" size="20" />,
      <SiJest key="jest-icon" size="20" />,
    ],
    linkHost: "https://amigo-secreto-alura.vercel.app/ ",
    linkProjeto: "https://github.com/Mognatti/amigo-secreto-alura",
    preview: AmigoSecretoThumb,
  },
  {
    title: "Gamelist Challenge",
    subtitle: "Processo seletivo para estágio",
    description:
      "Aplicação Full-Stack que recebe dados de uma API para apresentar ao usuário, que poderá criar uma conta para favoritar e avaliar os itens que chegam da API. A autenticação e o banco do usuário ficam no firebase",
    madeWith: [
      <FaReact key="react-icon" size="20" />,
      <ImHtmlFive key="html-icon" size="20" />,
      <SiStyledcomponents key="styled-components-icon" size="25" />,
      <SiTypescript key="ts-icon" size="20" />,
    ],
    linkHost: "https://game-list-challenge.vercel.app/",
    linkProjeto: "https://github.com/Mognatti/game-list-challenge",
    preview: GamelistThumb,
  },
  {
    title: "Meteora",
    subtitle: "Front-end challenge Alura - 7ª edição",
    description:
      "Criação do esqueleto de um site de vendas a partir de um figma. Todo o código foi constuído por mim, a única diretriz era deixar o projeto funcional e estilizado de acordo com o figma fornecido",
    madeWith: [
      <FaReact key="react-icon" size="20" />,
      <ImHtmlFive key="html-icon" size="20" />,
      <SiStyledcomponents key="styled-components-icon" size="25" />,
      <SiTypescript key="ts-icon" size="20" />,
    ],
    linkHost: "https://front-end-challenge-alura-7-edition.vercel.app/",
    linkProjeto:
      "https://github.com/Mognatti/front-end-challenge-alura-7-edition",
    preview: Meteorathumb,
  },
];
