/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialIcon = "bx bxs-sun";

const ThemeProvider = ({ children }) => {
  const [btntheme, setBtntheme] = useState(initialIcon);

  const handleTheme = () => {
    if (btntheme === "bx bxs-sun") {
      setBtntheme("bx bxs-moon");

      document.documentElement.setAttribute("tema", "light");
    } else {
      setBtntheme("bx bxs-sun");
      document.documentElement.setAttribute("tema", "dark");
    }
  };
  const data = { btntheme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
