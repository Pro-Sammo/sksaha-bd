import "./App.css";
import { AnimatePresence } from "framer-motion";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Audit from "./components/services/Audit";
import Tax from "./components/services/Tax";
import Business from "./components/services/Business";
import Managment from "./components/services/Managment";
import Account from "./components/services/Account";
import Hr from "./components/services/Hr";
import Userinfo from "./components/admin/Userinfo";

function App() {

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/admin" element={<Userinfo/>}/>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/tax" element={<Tax />} />
          <Route path="/business" element={<Business />} />
          <Route path="/managment" element={<Managment />} />
          <Route path="/account" element={<Account />} />
          <Route path="/hr" element={<Hr />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
