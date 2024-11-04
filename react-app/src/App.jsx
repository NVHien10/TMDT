import Header from "./Header"; // Import component N
import Frm from "./Frm";
import Footer from "./Footer";

//import Electronic from "./Electronic"; // Import component mới của bạn
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="block">
        <Header />
      </div>

      {/* <div className="sm:block md:hidden lg:hidden">
        <Mobile />
      </div> */}

      <div>
        <Frm />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
