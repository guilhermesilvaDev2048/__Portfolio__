import react from "./img/react icon.svg";
import typescript from "./img/typescript-original.svg";
import tailwind from "./img/Tailwind.svg";
import javascript from "./img/logo javascript.svg";
import css from "./img/logo-css3.svg";
import form from "./img/form.png";
import curso from "./img/curso.png";
import quiz from "./img/quiz.png";

export const projects = [
  {
    id: 1,
    title: "Quiz de Programação",
    img: `${quiz}`,
    lang: [
      { image: `${react}` },
      { image: `${javascript}` },
      { image: `${css}` },
    ],
    description:
      "Quiz de programação feito para encarar seus desafios na programação",
    link_github: "https://github.com/guilhermesilvaDev2048/quiz_react",
    link_deploy: "https://quiz-react-ten-xi.vercel.app/",
  },
  {
    id: 2,
    title: "Formulário MultiStep",
    img: `${form}`,
    lang: [
      { image: `${react}` },
      { image: `${javascript}` },
      { image: `${css}` },
    ],
    description: "Formulário multistep desenvolvido com react e javascript",
    link_github:
      "https://github.com/guilhermesilvaDev2048/formulariomulti-react",
    link_deploy: "https://formulariomulti-react.vercel.app/",
  },
  {
    id: 3,
    title: "Curso Fictício",
    img: `${curso}`,
    lang: [
      { image: `${react}` },
      { image: `${typescript}` },
      { image: `${tailwind}` },
    ],
    description: "Site venda de curso Fictício para testes freelancer",
    link_github: "https://github.com/guilhermesilvaDev2048/cursoficticio",
    link_deploy: "https://cursoficticio.vercel.app/",
  },
];
