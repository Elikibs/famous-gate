// src/components/BranchCard.jsx
import { motion } from "framer-motion";

export default function BranchCard({ branch, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="p-5 bg-white rounded-2xl shadow hover:shadow-lg"
    >
      <h4 className="text-xl font-bold text-emerald-700">{branch.name}</h4>
      <p className="mt-2 text-gray-600">{branch.description}</p>
      <p className="mt-3 text-sm text-gray-500">Address: {branch.address}</p>
      <div className="mt-4 flex gap-3">
        <a 
          className="text-sm px-3 py-2 bg-emerald-50 rounded-full" 
          href={`https://www.google.com/maps/search/${encodeURIComponent(branch.name + ' Famous Gate')}`} 
          target="_blank" rel="noreferrer">
          Map
        </a>
        <a className="text-sm px-3 py-2 bg-emerald-600 text-white rounded-full" href="#contact">Contact</a>
      </div>
    </motion.div>
  );
}
