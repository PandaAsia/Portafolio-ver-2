import { useModal } from "../hooks/useModal";
import ModalProyect from "./ModalProyect";
import "./Modal.css";
import { useContext } from "react";
import LenguageContext from "../Context/LenguageContext";

/* eslint-disable react/prop-types */
const ModalProyects = ({ cardContent }) => {
  const [isOpenModal, openModel, closedModel] = useModal(false);
  const { texts } = useContext(LenguageContext);
  return (
    <>
      <button onClick={openModel} className="Proyect-btn">
        <img src={cardContent.img} alt="Imagen del Proyecto" />
        <h4>{cardContent.nombre}</h4>
      </button>
      <ModalProyect isOpen={isOpenModal} closeModal={closedModel}>
        <div className="Modal-img">
          <img src={cardContent.img} alt="Imagen del Proyecto" />
        </div>
        <div className="Modal-info">
          <h2>{cardContent.nombre}</h2>
          <p>{cardContent.descripcion}</p>
          <h3>
            {texts.technoligi}: {cardContent.tecnologia}
          </h3>
          <a href={cardContent.link} target="_blank">Ir a Web</a>
        </div>
      </ModalProyect>
    </>
  );
};
export default ModalProyects;
