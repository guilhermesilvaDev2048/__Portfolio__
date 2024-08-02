import { useEffect, useState } from "react";
import { HeaderDefault } from "./HeaderPC";
import { HeaderMobile } from "./HeaderMobile";

export function Header() {
  const [IsMenu, setIsMenu] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setIsMenu(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
  }, []);

  return <>{IsMenu > 1000 ? <HeaderDefault /> : <HeaderMobile />}</>;
}
