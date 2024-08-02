import React from "react";
import { Dot } from "./dot";

export function Stacks() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind Css",
    "Styled-Components",
    "HTML",
    "CSS",
  ];
  return (
    <ul className="flex flex-wrap gap-3 items-center justify-center text-gray-400 px-4">
      {skills.map((skill, index) => (
        <React.Fragment key={skill}>
          <li>{skill}</li>
          {index < skills.length - 1 && <Dot />}
        </React.Fragment>
      ))}
    </ul>
  );
}
