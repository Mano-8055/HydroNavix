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
import About from "./pages/About";
import Client from "./pages/Client";
import CursorFollower from "./layouts/CursorFollower";
import EachService from "./pages/EachService";
import MarinexStudio from "./pages/MarinexStudio";
import Manpower from "./pages/Manpower";
import Career from "./pages/Career";
import Home2 from "./pages/Home2";

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
        <Route path="/" element={<Home2 />} />
        <Route path="/engineering-services" element={<Service />} />
        <Route path="/engineering-services/:id" element={<EachService />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Project />} />
        <Route path='/marinex-studio' element={<MarinexStudio />} />
        <Route path='/manpower' element={<Manpower />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/career" element={<Career/>} />

      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;