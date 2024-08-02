import { useState } from "react";
import { Link } from "react-router-dom";

export function HeaderMobile() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="w-screen h-20 border-b border-zinc-500 flex items-center justify-between px-4">
      <Link to={`/`} className="text-xl font-medium">
        Guilherme <span className="text-red-600">Silva</span>
      </Link>
      <div className="flex flex-col gap-2" onClick={() => setMenu(!menu)}>
        <div className="w-8 h-px bg-zinc-500"></div>
        <div className="w-8 h-px bg-zinc-500"></div>
        <div className="w-8 h-px bg-zinc-500"></div>
      </div>
      {menu && (
        <div className="absolute right-7 top-12 flex flex-col items-center bg-zinc-900 text-white font-semibold rounded-md">
          <ul className="w-[200px] flex flex-col items-center justify-center">
            <li className="flex justify-center items-center w-full">
              <Link
                className="w-full text-center p-3 border-b border-zinc-500"
                to={`/`}
              >
                Inicio
              </Link>
            </li>
            <li className="flex justify-center items-center w-full">
              <Link
                className="w-full text-center p-3 border-b border-zinc-500"
                to={`/about`}
              >
                Sobre
              </Link>
            </li>
            <li className="flex justify-center items-center w-full">
              <Link
                className="w-full text-center p-3 border-b border-zinc-500"
                to={`/projects`}
              >
                Projetos
              </Link>
            </li>
            <li className="flex justify-center items-center w-full">
              <a
                target="_blank"
                className="w-full text-center p-3"
                href="//wa.me/11966144965"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
