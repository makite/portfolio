import { useContext, useEffect, useState } from "react";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Introduction from "./Components/Introduction/Introduction";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonal from "./Components/Testimonal/Testimonal";
import Works from "./Components/Works/Works";
import BackButton from "./Components/Common/BackButton";
import { themeContext } from "./Context";
import SideBar from "./Components/SideBar/SideBar";
import BackDrop from "./Components/BackDrop/BackDrop";
function App() {
  useEffect(() => {
    document.title = "Dam Tech";
  });
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [sidebar, setsidebar] = useState(false);
  const togleClick = () => {
    setsidebar((prevState) => !prevState);
  };
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <NavBar togleClick={togleClick} />
      <SideBar togleClick={togleClick} sidebar={sidebar} />
      <BackDrop togleClick={togleClick} sidebar={sidebar} />
      <Introduction />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonal />
      <Contact />
      <Footer />
      <BackButton />
    </div>
  );
}

export default App;
