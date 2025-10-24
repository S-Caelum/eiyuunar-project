import { Outlet } from "react-router";
import Navbar from "../navigation/navbar";

export default function MainLayout() {
  return (
    <>
      <nav className="w-[72px] border-r h-screen fixed bg-(--mid-color)">
        <Navbar />
      </nav>
      <div className="min-h-screen w-[calc(100vw-72px)] ml-16 flex flex-col justify-center ">
        <Outlet />
      </div>
    </>
  );
}
