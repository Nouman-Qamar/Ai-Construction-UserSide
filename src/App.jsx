import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About/About.jsx";
import HowItWorks from "./pages/How-It-Works/work.jsx";
import Services from "./pages/Servicee/service.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Login from "./pages/Login/login.jsx";
import Signup from "./pages/Signup/signup.jsx";
import CardsPage from "./pages/CardsPage.jsx";
import FormFields from "./Components/FormField/FormFields.jsx";
import { ButtonExamples } from "./Components/Button/Button.jsx";
import Modalmenu from "./Components/Model/model.jsx";





function App() {
  return (
    <div className="app-layout">
     
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
      </main>

       {/* yh Button component ha uncomment krka chala kr dekhlo */}
           {/* <ButtonExamples /> */}

       {/* yh card component ha uncomment krka chala kr dekhlo */}
           {/* <CardsPage /> */}

      {/* yh Modal component ha uncomment krka chala kr dekhlo */}
            {/* <Modalmenu /> */}

      {/* yh FormFields component ha uncomment krka chala kr dekhlo */}
             {/* <FormFields />         */}

      

      <Footer />
    </div>
  );
}

export default App;
