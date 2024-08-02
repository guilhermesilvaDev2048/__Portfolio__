import { Outlet } from "react-router-dom";
import { Header } from "../components/Headers/header";
export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
