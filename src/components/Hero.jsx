// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="relative h-[60vh] sm:h-[70vh] bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hotel,lobby')" }}>
      <div className="bg-black bg-opacity-45 text-center p-6 rounded-lg">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">Welcome to Famous Gate</h2>
        <p className="mt-4 text-lg text-gray-200">Comfort, convenience & warm hospitality across Kericho, Kapsoit, Bomet, and Litein.</p>
        <a href="#branches" className="mt-6 inline-block px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700">
          Explore Branches
        </a>
      </div>
    </section>
  );
}
