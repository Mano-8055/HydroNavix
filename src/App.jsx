import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./layouts/Header";
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
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";
import Drone from "./pages/Drone";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Preload />;

    // useEffect(() => {
    //   if (window.location.protocol !== 'https:') {
    //     const httpsUrl = `https://${window.location.hostname}${window.location.pathname}${window.location.search}`;
    //     window.location.replace(httpsUrl);
    //   }
    // }, []);


  return (
    <div>
      <HelmetProvider>
        <Router>
          <Header />
          {/* <CursorFollower /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/engineering-services" element={<Service />} />
            <Route path="/engineering-services/:id" element={<EachService />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/marinex-studio" element={<MarinexStudio />} />
            <Route path="/manpower" element={<Manpower />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Client />} />
            <Route path="/career" element={<Career />} />
            <Route path="/drone" element={<Drone />} />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
