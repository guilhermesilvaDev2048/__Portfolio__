import { Stacks } from "./stacks";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export function Home() {
  return (
    <>
      <section className="w-screen h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-medium text-center">
          Olá, eu me chamo Guilherme
        </h1>
        <h2 className="text-2xl font-medium text-center">
          Desenvolvedor <span className="text-red-600">Frontend</span>
        </h2>
        <h3>Possuo altas experiências com:</h3>
        <Stacks />
        <p className="text-lg">Contrate me usando:</p>
        <div className="flex items-center flex-wrap gap-5">
          <a target="_blank" href="//wa.me/11966144965">
            <BsWhatsapp size={25} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/guilherme-silva-lima-18803a309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FaLinkedin size={25} />
          </a>
          <a target="_blank" href="https://github.com/guilhermesilvaDev2048">
            <BsGithub size={25} />
          </a>
        </div>
        <p className="text-center text-lg">
          Navegue para as outras páginas usando a barra de{" "}
          <span className="text-red-600">Navegação</span>
        </p>
      </section>
    </>
  );
}
