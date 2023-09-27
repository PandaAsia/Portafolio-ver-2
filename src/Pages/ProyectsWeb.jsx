import { useContext } from "react";
import LenguageContext from "../Context/LenguageContext";
import ModalProyects from "../Component/ModalProyects.jsx";

const ProyectWeb = () => {

  const { texts }=useContext(LenguageContext);
  const { proWeb } = useContext(LenguageContext);
  return (
    <div className="Proyect-container">
      {proWeb.map((el) => (
        <ModalProyects key={el.id} cardContent={el} cardBtnName={texts.viewWeb} />
      ))}
    </div>
  );
};
export default ProyectWeb;
