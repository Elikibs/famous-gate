// src/components/Branches.jsx
import kerichoImg from "../assets/kericho.jpg";
import kapsoitImg from "../assets/kapsoit.jpg";
import bometImg from "../assets/bomet.jpg";
import liteinImg from "../assets/litein.jpg";
import BranchCard from "./BranchCard";

const branches = [
  { name: "Kericho", description: "Our flagship hotel with serene tea estate views.", image: kerichoImg },
  { name: "Kapsoit", description: "A cozy retreat perfect for travelers.", image: kapsoitImg },
  { name: "Bomet", description: "Modern amenities and warm hospitality.", image: bometImg },
  { name: "Litein", description: "Conveniently located in the town center.", image: liteinImg },
];

export default function Branches() {
  return (
    <section id="branches" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Branches</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {branches.map((branch) => (
          <BranchCard key={branch.name} {...branch} />
        ))}
      </div>
    </section>
  );
}
