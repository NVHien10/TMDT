import Header from "./Header"; // Import component N
import Frm from "./Frm";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Header />
      <div className="py-[1rem]">
        <Frm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
