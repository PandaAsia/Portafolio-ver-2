import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LenguageContext from "../Context/LenguageContext";
import logo from "../assets/Logo_personal.png";
import ThemeContext from "../Context/ThemeContext";

const Menu = () => {
  const { texts, handleLanguage } = useContext(LenguageContext);
  const { btntheme, handleTheme } = useContext(ThemeContext);
  const [viewMenu, setViewMenu] = useState("");

  const handleMenu = () => {
    if (viewMenu === "") {
      setViewMenu("is-active");
    } else {
      setViewMenu("");
    }
  };

  return (
    <>
      <header className="header">
        <section className="hea-container">
          <div className="hea-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className={`hea-menu ${viewMenu}`}>
            <Link to="/" onClick={handleMenu}>
              {texts.navHome}
            </Link>
            <Link to="/proyectos" onClick={handleMenu}>
              {texts.navProyect}
            </Link>
            <Link to="/habilidades" onClick={handleMenu}>
              {texts.navSkill}
            </Link>
            <Link to="/formacion" onClick={handleMenu}>
              {texts.navforma}
            </Link>
          </nav>
          <div className="hea-contexts">
            <select name="lenguage" onChange={handleLanguage}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <button onClick={handleTheme} className="hea-sun-moon">
              <i className={btntheme}></i>
            </button>
          </div>
          <button
            className={`btn-movil hamburger hamburger--spring ${viewMenu}`}
            type="button"
            onClick={handleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </section>
      </header>
    </>
  );
};
export default Menu;
