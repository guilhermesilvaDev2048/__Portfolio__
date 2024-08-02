import { Link } from "react-router-dom";

export function HeaderDefault() {
  return (
    <header className="w-screen h-20 px-24 flex items-center justify-between border-b border-zinc-500">
      <Link to={`/`} className="text-2xl font-medium">
        Guilherme <span className="text-red-600">Silva</span>
      </Link>
      <ul className="flex items-center gap-4">
        <li>
          <Link className="hover:text-red-600 transition" to={`/`}>
            Inicio
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-600 transition" to={`/about`}>
            Sobre
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-600 transition" to={`/projects`}>
            Projetos
          </Link>
        </li>
        <li>
          <a
            className="hover:text-red-600 transition"
            target="_blank"
            href="//wa.me/11966144965"
          >
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
}
