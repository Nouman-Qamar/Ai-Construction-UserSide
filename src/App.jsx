import { Routes, Route } from "react-router-dom";
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

// 🔥 MODIFIED: Import Detail page component for dynamic routing
import Detail from "./Pages/Project/Detail.jsx"; // ✅ Added for dynamic project details page

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
          {<Route path="/notfound" element={<NotFound />} />}
          <Route path="/userhome" element={<UserHome />} />
          {/* 🔥 MODIFIED: Dynamic route for job details */}
          <Route path="/projects/:id" element={<Detail />} />{" "}
          {/* ✅ Dynamic detail page route */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
