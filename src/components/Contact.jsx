// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-emerald-50">
      <h3 className="text-3xl font-semibold text-center mb-6 text-emerald-700">Contact Us</h3>
      <div className="max-w-xl mx-auto">
        <form 
          className="grid gap-4"
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! This will connect to your backend later."); }}
        >
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg border" required />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg border" required />
          <textarea rows="4" placeholder="Message" className="p-3 rounded-lg border" required></textarea>
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
