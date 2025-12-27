import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import FormFields from "./Components/FormField/FormFields.jsx";
import { ButtonExamples } from "./Components/Button/Button.jsx";
import CardsPage from "./Components/Cardpage/Cardpage.jsx";
import Modalmenu from "./Components/Model/model.jsx";
import Login from "./Pages/Login/login.jsx";
import Signup from "./Pages/Signup/signup.jsx";
import About from "./Pages/About/about.jsx";
import Work from "./Pages/How-It-Works/work.jsx";
import Home from "./Pages/Home/home.jsx";
import Services from "./Pages/Servicee/Services.jsx";






function App() {
  return (
    <div className="app-layout">
     
      <Navbar />
      <main className="app-content">
        <Routes>
          {<Route path="/login"element={<Login/>}/>}
          {<Route path="/signup"element={<Signup/>}/>}
          {<Route path="/about"element={< About/>}/>}
          {<Route path="/how-it-works"element={< Work/>}/>}
           {<Route path="/services"element={< Services/>}/>}
           {<Route path="/home"element={< Home/>}/>}
          {/* <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} />
          <Route path="/" element={<FormFields />} /> */}

                              {/* Yaha py jsa upper Route ka path dya hwa asy sabny apny pages ka denaa*/}
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
