import {  HashRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "../Pages/Home";
import Proyects from "../Pages/Proyects";
import ProyectWeb from "../Pages/ProyectsWeb";
import ProyectMaqueta from "../Pages/ProyectsMaqueta";
import ProyectGame from "../Pages/ProyectsGame";
import Skills from "../Pages/Skills";
import Error404 from "../Pages/Error404";
import History from "../Pages/History";
import Encabezado from "./footer";

const Routerpage = () => {
  return (
    <HashRouter>
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyects />}>
            <Route index element={<ProyectWeb />} />
            <Route path="maquetacion" element={<ProyectMaqueta />} />
            <Route path="videogame" element={<ProyectGame />} />
          </Route>
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/formacion" element={<History />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Encabezado />
    </HashRouter>
  );
};
export default Routerpage;
