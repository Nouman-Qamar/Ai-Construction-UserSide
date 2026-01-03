import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FormFields from "./components/FormField/FormFields.jsx";
import { ButtonExamples } from "./components/Button/Button.jsx";
import CardsPage from "./components/Cardpage/Cardpage.jsx";
import Modalmenu from "./components/Model/model.jsx";
import Login from "./pages/Login/login.jsx";
import Signup from "./pages/Signup/signup.jsx";
import About from "./pages/About/about.jsx";
import Work from "./pages/How-It-Works/work.jsx";
import Home from "./pages/Home/home.jsx";
import Services from "./pages/Services/Services.jsx";
import LaborDetails from "./components/LaborDetails/LaborDetails.jsx";
import LaborSearch from "./components/LaborSearch/LaborSearch.jsx";
import PostJobFlow from "./components/PostJobFlow/PostJobFlow.jsx";
import LoginAs from "./pages/Login/selectlogin.jsx";
import NotFound from "./pages/Not-Found/notfound.jsx";
import UserHome from "./pages/Userhome/userhome.jsx";
import Projects from "./pages/Project/job.jsx";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-content">
        <Routes>
          {<Route path="/login" element={<Login />} />}
          {<Route path="/signup" element={<Signup />} />}
          {<Route path="/about" element={<About />} />}
          {<Route path="/how-it-works" element={<Work />} />}
          {<Route path="/services" element={<Services />} />}
          {<Route path="/" element={<Home />} />}
          {<Route path="/jobs" element={<Projects />} />}
          {<Route path="/labor-details" element={<LaborDetails />} />}
          <Route path="/labour-search" element={<LaborSearch />} />
          {<Route path="/post-job-flow" element={<PostJobFlow />} />}
          {<Route path="/login-as" element={<LoginAs />} />}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
