import Routerpage from "./Component/Routerpage";
import { LenguageProvider } from "./Context/LenguageContext";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <LenguageProvider>
          <Routerpage />
        </LenguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
