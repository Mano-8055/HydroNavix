import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Footer from "./layouts/Footer";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:id" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
