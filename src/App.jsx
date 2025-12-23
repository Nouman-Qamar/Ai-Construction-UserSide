
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
          {/* <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} /> */}

                              {/* Yaha py jsa upper Route ka path dya hwa asy sabny apny pages ka denaa*/}
        </Routes>
      </main>

     <FormFields />
      <Footer />
    </div>
  );
}

export default App;
