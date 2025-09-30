// src/components/About.jsx
import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 flex flex-col md:flex-row items-center gap-8">
      <img 
        src={aboutImg} 
        alt="About Famous Gate Hotels" 
        className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
      />
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Famous Gate Hotels has been serving guests with top-notch hospitality 
          for over a decade. Our mission is to provide a welcoming experience, 
          whether you’re here for leisure or business.
        </p>
        <p className="text-gray-700">
          With branches across Kericho, Kapsoit, Bomet, and Litein, we ensure 
          quality service and comfort at every location.
        </p>
      </div>
    </section>
  );
}
