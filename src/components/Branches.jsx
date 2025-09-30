// src/components/Branches.jsx
import BranchCard from "./BranchCard";

const branches = [
  {
    name: "Kericho",
    description: "Located in the heart of the tea-growing region — great for business & leisure.",
    address: "Kericho town",
  },
  {
    name: "Kapsoit",
    description: "A cozy stopover with serene views and welcoming hospitality.",
    address: "Kapsoit town",
  },
  {
    name: "Bomet",
    description: "Perfect for travelers and families, with modern amenities.",
    address: "Bomet town",
  },
  {
    name: "Litein",
    description: "Charming and peaceful, known for warm service and comfort.",
    address: "Litein town",
  },
];

export default function Branches() {
  return (
    <section id="branches" className="py-12 px-6 bg-gray-50 flex-grow">
      <h3 className="text-3xl font-semibold text-center mb-8 text-emerald-700">Our Branches</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {branches.map((branch, i) => (
          <BranchCard key={i} branch={branch} index={i} />
        ))}
      </div>
    </section>
  );
}
