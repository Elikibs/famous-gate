// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Branches from "./components/Branches";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Branches />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
