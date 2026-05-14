import React from "react";
import { motion } from "framer-motion";


const brands = [
  { id: 1, name: "Zara" },
  { id: 2, name: "Gucci" },
  { id: 3, name: "Prada" },
  { id: 4, name: "Calvin Klein" },
  { id: 5, name: "Versace" },
];

function Brands() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 overflow-hidden">

      
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        Our Top Brands
      </motion.h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">

        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            className="flex items-center justify-center h-28 md:h-32 bg-white border border-gray-200 rounded-2xl shadow-sm cursor-pointer"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 25px rgba(0,0,0,0.15)"
            }}
          >

            <p className="text-lg md:text-xl font-semibold text-gray-700 text-center px-2">
              {brand.name}
            </p>

          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Brands;