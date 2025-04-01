import Header from "./components/Header"; // Import component N
import Footer from "./components/Footer";
import Frm from "./components/Frm";
import NavShow from "./components/NavShow";
import { useState } from "react";
import React from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="block">
        <Header showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
      <div >
        <NavShow />
      </div>
      <div>
        <Frm showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
      <div className="">
        <Footer showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default App;