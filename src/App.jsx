import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FormFields from "./components/formfield/FormFields";


function App() {
  return (
    <div className="app-layout">
     
      <Navbar />

      
      <main className="app-content">
        <Routes>
          
          <Route path="/formfields" element={<FormFields />} />
        </Routes>
      </main>

     <FormFields />
      <Footer />
    </div>
  );
}

export default App;
