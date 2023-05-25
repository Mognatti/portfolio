import { SiTypescript, SiSass, SiJest } from "react-icons/si";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import AluroniThumb from "../../../../public/img/Aluroni_Preview.png";
import AmigoSecretoThumb from "../../../../public/img/Amigo_Secreto_Preview.png";

export const projects = [
  {
    title: "Aluroni",
    subtitle: "Cardápio de uma cozinha italiana",
    description:
      "O projeto possui algumas ferramentas para alterar a ordem do cardápio de acordo com critérios estabelecidos pelo cliente, além de seprar os itens por uma label (massas, salada, etc..) e um buscador de itens. Para a melhor navegação pela aplicação, foi implementada a biblioteca 'React Router'",
    madeWith: [
      <FaReact size="20" />,
      <ImHtmlFive size="20" />,
      <SiSass size="20" />,
      <SiTypescript size="20" />,
    ],
    linkHost: "https://aluroni-menu.vercel.app/",
    linkProjeto: "https://github.com/Mognatti/Aluroni",
    preview: AluroniThumb,
  },
  {
    title: "Sorteador amigo de secreto",
    subtitle: "Randomiza uma lista e correlaciona os elementos",
    description:
      "A aplicação foi criada em React utilizando o método TDD (Test Driven Development) através da combinação da biblioteca Jest e da testing library do react para garantir o adequado funcionamento da mesma. Além disso, as bibliotecas react-router-dom e recoil foram utilizadas. Com essa aplicação é possível criar uma lista de participantes de um sorteio e formar uma relação entre um indivíduo (sorteador) com outro (sorteado) de maneira que é impossível realizar o sorteio caso não seja atingido o número mínimo de participantes e que, de nenhuma forma, será possível que mais de um participante tire a mesma pessoa e nem ele mesmo.",
    madeWith: [
      <FaReact size="20" />,
      <ImHtmlFive size="20" />,
      <ImCss3 size="20" />,
      <SiTypescript size="20" />,
      <SiJest size="20" />,
    ],
    linkHost: "https://amigo-secreto-alura.vercel.app/ ",
    linkProjeto: "https://github.com/Mognatti/amigo-secreto-alura",
    preview: AmigoSecretoThumb,
  },
];
