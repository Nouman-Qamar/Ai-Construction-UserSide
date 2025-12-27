import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FormFields from "./Components/FormField/FormFields.jsx";
import { ButtonExamples } from "./Components/Button/Button.jsx";
import CardsPage from "./Components/Cardpage/Cardpage.jsx";
import Modalmenu from "./Components/Model/model.jsx";
import PostJobFlow from "./components/PostJobFlow/PostJobFlow.jsx";
import Login from "./pages/Login/login.jsx";
import Signup from "./pages/Signup/signup.jsx";
import About from "./pages/About/about.jsx";
import Work from "./pages/How-It-Works/work.jsx";
import Home from "./pages/Home/home.jsx";
import Services from "./pages/Services/Services.jsx";







function App() {
  return (
    <div className="app-layout">
     
      <Navbar />
      <main className="app-content">
        <Routes>
          {<Route path="/login"element={<Login/>}/>}
          {<Route path="/signup"element={<Signup/>}/>}
          {<Route path="/about"element={<About/>}/>}
          {<Route path="/how-it-works"element={<Work/>}/>}
          {<Route path="/services"element={<Services/>}/>}
          {<Route path="/post-job"element={<PostJobFlow/>}/>}
          {<Route path="/"element={<Home/>}/>}

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
