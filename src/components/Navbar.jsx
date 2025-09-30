// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-emerald-700">Famous Gate</h1>
      <nav>
        <button 
          className="sm:hidden text-xl" 
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`sm:flex gap-6 ${menuOpen ? "block mt-4" : "hidden sm:flex"}`}>
          <li><a href="#home" className="hover:text-emerald-600">Home</a></li>
          <li><a href="#branches" className="hover:text-emerald-600">Branches</a></li>
          <li><a href="#about" className="hover:text-emerald-600">About</a></li>
          <li><a href="#contact" className="hover:text-emerald-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
