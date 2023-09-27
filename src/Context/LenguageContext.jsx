/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import Proyectweb from "../api/db.json";
import ProyectMaque from "../api/db_maque.json";

const LenguageContext = createContext();
const initialLenguage = "es";
const initialProyect = Proyectweb["ProyectWebEs"];
const initialMaque = ProyectMaque["ProyectMaqEs"];
const translations = {
  es: {
    homeTitle: "Hola, Soy Jerry",
    homeSubTitle: "Soy",
    homeSubTitle1: "Programador Front-End",
    homeContent:
      "Soy una persona perseverante y autodidacta, con muchas ganas de aprender y superarse, comprometido con mi trabajo y estudios, con el fin de adquirir nuevos conocimientos que me permitan ser cada vez más competente en mi ámbito laboral y poder cumplir mis objetivos.",
    homebutton: "Descargar CV",
    navHome: "Home",
    navProyect: "Proyectos",
    navSkill: "Habilidades",
    navforma: "Formación",
    proyectTitle: "Proyectos",
    proyectWeb: "Webs",
    proyectLayout: "Maquetación",
    proyectGame: "Videojuegos",
    skillTitle: "Habilidades y herramientas",
    formaTitle: "Formación",
    formaSubtitle01: "Educación",
    formaSubtitle02: "Experiencia laboral",
    formList01: [
      {
        id: "ed01",
        carrera: "Ingeneria de Sistema",
        lugar: "Univercidad césar vallejo, Lima",
        fecha: "(Jun-2014/Dic-2022)",
      },
      {
        id: "ed02",
        carrera: "Diseñador Gráfico",
        lugar: "Instituto americano, Lima.",
        fecha: "(Ene-2012/Jun-2014)",
      },
    ],
    formList02: [
      {
        id: "wo01",
        empresa: "Universidad Señor de Sipan (2022)",
        area: "Programador front end, maquetación como el diseño del software.",
      },
      {
        id: "wo02",
        empresa: "Ocassione (2019)",
        area: "Programador front end, edición de fotografías y actualización de la base de datos.",
      },
      {
        id: "wo03",
        empresa: "Sociable oft (2018)",
        area: "Programador front end, maquetación web y edición de fotografías.",
      },
      {
        id: "wo04",
        empresa: "Proyecto de Investigación (Tesis) (2021-2022)",
        area: "Programador front end, maquetación y diseño del software.",
      },
    ],
    footer: "©2023 | Diseñado y codificado por Jerry Garcia",
    technoligi: "Tecnologías",
  },
  en: {
    homeTitle: "hello, I am Jerry",
    homeSubTitle: "I am",
    homeSubTitle1: "Front End developer",
    homeContent:
      "I am a persevering and self-taught person, eager to learn and improve, committed to my work and studies, in order to acquire new knowledge that allows me to be increasingly competent in my work environment and be able to meet my goals.",
    homebutton: "Download CV",
    navHome: "Home",
    navProyect: "Projects",
    navSkill: "Skills",
    navforma: "Education",
    proyectTitle: "Projects",
    proyectWeb: "Webs",
    proyectLayout: "Layout",
    proyectGame: "Video Games",
    skillTitle: "Skills & tools",
    formaTitle: "Education",
    formaSubtitle01: "Academic training",
    formaSubtitle02: "Work experience",
    formList01: [
      {
        id: "ed01",
        carrera: "Systems engineer",
        lugar: "Univercidad césar vallejo, Lima",
        fecha: "(Jun-2014/Dic-2022)",
      },
      {
        id: "ed02",
        carrera: "Graphic designer",
        lugar: "Instituto americano, Lima.",
        fecha: "(Ene-2012/Jun-2014)",
      },
    ],
    formList02: [
      {
        id: "wo01",
        empresa: "Universidad Señor de Sipan (2022)",
        area: "Front-end programmer, layout and software design.",
      },
      {
        id: "wo02",
        empresa: "Ocassione (2019)",
        area: "Front-end programmer, photo editing and upgrade of data base.",
      },
      {
        id: "wo03",
        empresa: "Sociable oft (2018)",
        area: "Front-end programmer, web layout and photo editing.",
      },
      {
        id: "wo04",
        empresa: "Proyecto de Investigación (Tesis) (2021-2022)",
        area: "Front-end programmer, layout and software design.",
      },
    ],
    footer: "©2023 | Designed and coded by Jerry Garcia",
    technoligi: "Technologies",
  },
};

const LenguageProvider = ({ children }) => {
  const [lenguage, setLenguage] = useState(initialLenguage);
  const [texts, setText] = useState(translations[lenguage]);
  const [proWeb, setProWeb] = useState(initialProyect);
  const [proMaque, setProMaque] = useState(initialMaque);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLenguage("es");
      setText(translations.es);
      setProWeb(Proyectweb["ProyectWebEs"]);
      setProMaque(ProyectMaque["ProyectMaqEs"]);
    } else {
      setLenguage("en");
      setText(translations.en);
      setProWeb(Proyectweb["ProyectWebEn"]);
      setProMaque(ProyectMaque["ProyectMaqEn"]);
    }
  };
  const data = { texts, handleLanguage, proWeb, proMaque };
  return (
    <LenguageContext.Provider value={data}>{children}</LenguageContext.Provider>
  );
};
export { LenguageProvider };
export default LenguageContext;
