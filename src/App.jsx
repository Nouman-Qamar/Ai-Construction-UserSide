import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
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
import JobList from "./Pages/Project/joblist.jsx";
import JobDetails from "./Pages/Project/JobDetails.jsx";
import LaborDetails from "./components/LaborDetails/LaborDetails.jsx";
import LaborSearch from "./components/LaborSearch/LaborSearch.jsx";
import PostJobFlow from "./components/PostJobFlow/PostJobFlow.jsx";
import LoginAs from "./Pages/Login/selectlogin.jsx";

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
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
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
