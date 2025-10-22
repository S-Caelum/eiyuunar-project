import { Outlet } from "react-router";

export default function ServiceLayout() {
  return (
    <div className="pt-[6.75%] pl-[7.25%] h-screen w-screen">
      <Outlet />{" "}
    </div>
  );
}
