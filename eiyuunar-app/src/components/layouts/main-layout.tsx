import { Outlet } from "react-router";
import Navbar from "../navigation/navbar";

export default function MainLayout() {
  return (
    <>
      <nav className="w-[58px] border-r h-screen fixed bg-(--mid-color)">
        <Navbar />
      </nav>
      <div className="min-h-screen w-[calc(100vw-58px)] ml-[58px] flex flex-col justify-center ">
        <Outlet />
      </div>
    </>
  );
}
