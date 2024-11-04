import Header from "./Header"; // Import component N
import Frm from "./Frm";
import Footer from "./Footer";
import { useState } from "react";
//import Electronic from "./Electronic"; // Import component mới của bạn
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



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

      {/* <div className="sm:block md:hidden lg:hidden">
        <Mobile />
      </div> */}

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
