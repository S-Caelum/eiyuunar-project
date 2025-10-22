import { Link, useLocation } from "react-router";

export default function NotFound() {
  const location = useLocation();
  return (
    <>
      <div className="w-full h-full font-[PlexMono]">
        <h1 className="text-6xl">
          {">"} REDIRECT home{location.pathname}
        </h1>
        <h2 className="text-4xl mt-12">STATUS: 404</h2>
        <section className="flex gap-5">
          <h2 className="text-4xl "> Requested resource </h2>
          <h2 className="text-4xl text-(--terminus-color)"> DOES NOT </h2>
          <h2 className="text-4xl"> exist</h2>
        </section>
        <p className="text-3xl mt-20">
          Please, (DO NOT) contact The Administrator
        </p>
        <div className="text-3xl underline mt-20">
          <Link to={"/"}>[home]</Link>
        </div>
      </div>
    </>
  );
}
