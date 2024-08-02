import photo from "../../../public/photo1.png";

export function About() {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="py-2 px-5 rounded-md bg-zinc-600 flex flex-col gap-4 md:flex-row lg:w-[1100px] shadow-lg">
        <img src={photo} className="object-cover w-full md:w-[300px]" alt="" />
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-xl text-red-600 font-semibold">Sobre mim</h1>
          <p className="md:text-start">
            Desde pequeno sempre fui apaixonado por programação, hoje em dia
            ainda continuo seguindo esse sonho e buscando minha vaga como
            desenvolvedor frontend gosto de desenvolver meus projetos totalmente
            responsivos para qualquer tipo de tela e dispositivos. gosto também
            de desenvolver meus projetos utilizando React e TypeScript
          </p>
        </div>
      </div>
    </section>
  );
}
