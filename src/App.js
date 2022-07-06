import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Section_Powerful from "./components/Section_Powerful";
import "./Style/main.css";
import React from "react";

function App()
{

  const [menu, setMenu] = React.useState(false);
  function showMenu()
  {
    setMenu(!menu);
  }
  return (
    <div className="App">
      <div className="view">
        {menu && <Menu showMenu={showMenu} />}
        <Header showMenu={showMenu} />
        <Hero />
      </div>
      <Section_Powerful />
      <Footer />
    </div>
  );
}

export default App;
