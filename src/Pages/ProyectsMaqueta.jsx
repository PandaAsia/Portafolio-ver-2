import { useContext } from "react";
import LenguageContext from "../Context/LenguageContext";

import ModalProyects from "../Component/ModalProyects";

const ProyectMaqueta = () => {
  const { proMaque } = useContext(LenguageContext);
  return (
    <div className="Proyect-container">
      {proMaque.map((el) => (
        <ModalProyects key={el.id} cardContent={el} />
      ))}
    </div>
  );
};
export default ProyectMaqueta;
