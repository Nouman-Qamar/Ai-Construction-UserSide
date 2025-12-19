import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./components/Footer";
import FormFields from "./components/formfield/FormFields";

function App() {
  return (
    <div className="app">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page routing */}
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/formfields" element={<FormFields />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
