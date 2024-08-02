import { BiRocket } from "react-icons/bi";
import { projects } from "./data";
import { BsGithub } from "react-icons/bs";

export function Projects() {
  return (
    <section className="w-screen 2xl:max-w-[1500px] mt-52 m-auto flex items-center justify-center 2xl:justify-start flex-wrap gap-7">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="py-4 flex bg-zinc-700 rounded-md gap-10 flex-col lg:flex-row items-center w-[350px] px-2 lg:px-0 lg:w-[700px] lg:h-[200px]"
          >
            <img
              src={project.img}
              className="w-full object-cover lg:w-[300px] h-[200px] rounded-tl-md rounded-bl-md"
              alt=""
            />
            <div className="flex flex-col h-full justify-between gap-5 lg:gap-2">
              <h1 className="text-red-600 font-semibold">{project.title}</h1>
              <p>{project.description}</p>
              <div className="flex items-center gap-2">
                {project.lang.map((lang) => (
                  <img width={20} src={lang.image} key={project.id} />
                ))}
              </div>
              <div className="w-full flex gap-2 px-2">
                <a
                  target="_blank"
                  href={project.link_github}
                  className="w-1/2 flex items-center justify-center gap-2 bg-black/50 rounded-md p-2"
                >
                  Github <BsGithub />
                </a>
                <a
                  target="_blank"
                  href={project.link_deploy}
                  className="w-1/2 flex items-center justify-center gap-2 rounded-md bg-blue-500 p-2"
                >
                  Deploy <BiRocket />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
