/* eslint-disable react/prop-types */
import "./Modal.css";

const ModalProyect = ({ children, isOpen, closeModal }) => {
  const handleModalContainerclick = (e) => e.stopPropagation();
  return (
    <article onClick={closeModal} className={`modalPro ${isOpen && "is-Open"}`}>
      <div className="modal-container" onClick={handleModalContainerclick}>
        <button onClick={closeModal} className="modal-close">
          <i className="bx bx-x"></i>
        </button>
        {children}
      </div>
    </article>
  );
};
export default ModalProyect;
