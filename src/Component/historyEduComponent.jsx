/* eslint-disable react/prop-types */
const HistoryEduComponent = ({ carrera }) => {
  return (
    <>
      <h4>{carrera.carrera}</h4>
      <p className="his-edu">{carrera.lugar}</p>
      <p>{carrera.fecha}</p>
    </>
  );
};
export default HistoryEduComponent;
