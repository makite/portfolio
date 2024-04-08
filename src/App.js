import { useContext, useEffect, useState } from "react";
import "./App.scss";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Introduction from "./Components/Introduction/Introduction";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Skill/Services";
import Works from "./Components/Works/Works";
import BackButton from "./Components/Common/BackButton";
import { themeContext } from "./Context";
import SideBar from "./Components/SideBar/SideBar";
import BackDrop from "./Components/BackDrop/BackDrop";
import Layout from "./Components/Layout";
function App() {
  useEffect(() => {
    document.title = "Makite Portfolio";
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
      <Layout />

      <Introduction />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />

      <Footer />
      <BackButton />
    </div>
  );
}

export default App;
