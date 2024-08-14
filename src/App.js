import { useEffect } from "react";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Productss from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  useEffect(() => {
    document.title = "React Material UI ";
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Productss />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
