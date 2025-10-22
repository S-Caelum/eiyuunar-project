import { Routes, Route } from "react-router";
import Root from "./pages/root.tsx";
import "./index.css";
import NotFound from "./pages/404.tsx";
import ServiceLayout from "./components/layouts/service-layout.tsx";
import MainLayout from "./components/layouts/main-layout.tsx";

export default function RouterConfig() {
  return (
    <Routes>
      <Route element={<ServiceLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Root />} />
      </Route>
    </Routes>
  );
}
