import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import FormFields from "./Components/FormField/FormFields.jsx";
import { ButtonExamples } from "./Components/Button/Button.jsx";
import CardsPage from "./Components/Cardpage/Cardpage.jsx";
import Modalmenu from "./Components/Model/model.jsx";





function App() {
  return (
    <div className="app-layout">
     
      <Navbar />
      <main className="app-content">
        <Routes>
          {/* <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} /> */}

                              {/* Yaha py jsa upper Route ka path dya hwa asy sabny apny pages ka denaa*/}
        </Routes>
      </main>

      

      <Footer />
    </div>
  );
}

export default App;
