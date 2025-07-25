import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Footer from "./layouts/Footer";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Project from "./pages/Project";
import Preload from "./pages/Preload"; 
import DigitalExpertisePage from "./pages/DigitalExpertisePage"; 
import About from "./pages/About";
import Client from "./pages/Client";
import CursorFollower from "./layouts/CursorFollower";
import Home1 from "./pages/Home1";
import EachService from "./pages/EachService";
import MarinexStudio from "./pages/MarinexStudio";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Preload />;

  return (
    <div>
    <Router>
      <Header />
      <CursorFollower />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Home1 />} />
        <Route path="/engineering-services" element={<Service />} />
        <Route path="/engineering-services/:id" element={<EachService />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Project />} />
        <Route path='/marinex-studio' element={<MarinexStudio />} />
        <Route path="/digital-expertise" element={<DigitalExpertisePage />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Client />} />

      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;