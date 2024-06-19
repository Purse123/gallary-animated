import { AnimatePresence } from "framer-motion";

import Navbar from "./component/hero/Navbar";
import Welcome from "./component/hero/Welcome";
import { Routes, Route } from "react-router-dom";
import Gallery from "./component/gallery/Gallery";
import Services from "./component/services/Services";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <div className="h-screen w-full text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
