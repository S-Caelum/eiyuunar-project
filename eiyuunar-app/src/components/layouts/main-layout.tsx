import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="p-[3.5%] min-h-[calc(100vh-3.5%)] w-screen">
      <Outlet />
    </div>
  );
}
