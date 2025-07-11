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
import AssetIntegrityPage from "./pages/AssetIntegrityPage";
import SustainablityPage from "./pages/SustainablityPage";

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
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:id" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/digital-expertise" element={<DigitalExpertisePage />} /> 
        <Route path="/asset-integrity" element={<AssetIntegrityPage />} /> 
        <Route path="/sustainability" element={<SustainablityPage />} /> 

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;