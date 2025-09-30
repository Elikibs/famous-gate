// src/components/Hero.jsx
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-[70vh] flex items-center justify-center text-white">
      <img 
        src={heroImg} 
        alt="Famous Gate Hotel" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative bg-black bg-opacity-50 p-8 rounded-xl text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Famous Gate Hotels</h2>
        <p className="text-lg">Experience comfort and luxury across Kericho, Kapsoit, Bomet, and Litein.</p>
      </div>
    </section>
  );
}
