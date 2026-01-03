import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
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
=======
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
import Services from "./Pages/Services/Services.jsx";
import LaborDetails from "./Components/LaborDetails/LaborDetails.jsx";
import LaborSearch from "./Components/LaborSearch/LaborSearch.jsx";
import PostJobFlow from "./Components/PostJobFlow/PostJobFlow.jsx";
import LoginAs from "./Pages/Login/selectlogin.jsx";
import NotFound from "./Pages/Not-Found/notfound.jsx";
import UserHome from "./Pages/Userhome/userhome.jsx";
import Projects from "./Pages/Project/job.jsx";
>>>>>>> 3202260533c91e45239fae7d5aa50620c0d676d9

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
<<<<<<< HEAD
=======
          {<Route path="/notfound" element={<NotFound />} />}
          <Route path="/userhome" element={<UserHome />} />
>>>>>>> 3202260533c91e45239fae7d5aa50620c0d676d9
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
