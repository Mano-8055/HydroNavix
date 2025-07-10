import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import HeroSection from "./layouts/HeroSection";

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </Router>
  );
}

export default App;
