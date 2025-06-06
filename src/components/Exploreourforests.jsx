"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Dummy forest data (update slugs/images as needed)
const forests = [
  { name: "Kakamega Forest", slug: "kakamega", image: "https://source.unsplash.com/600x400/?forest,1" },
  { name: "Aberdare Forest", slug: "aberdare", image: "https://source.unsplash.com/600x400/?forest,2" },
  { name: "Mt. Kenya Forest", slug: "mt-kenya", image: "https://source.unsplash.com/600x400/?forest,3" },
  { name: "Mau Forest", slug: "mau", image: "https://source.unsplash.com/600x400/?forest,4" },
  { name: "Arabuko Sokoke", slug: "arabuko", image: "https://source.unsplash.com/600x400/?forest,5" },
  { name: "Kereita Forest", slug: "kereita", image: "https://source.unsplash.com/600x400/?forest,6" },
  { name: "Ngong Forest", slug: "ngong", image: "https://source.unsplash.com/600x400/?forest,7" },
  { name: "Karura Forest", slug: "karura", image: "https://source.unsplash.com/600x400/?forest,8" },
  { name: "Shimba Hills", slug: "shimba", image: "https://source.unsplash.com/600x400/?forest,9" },
  { name: "Cherangany Forest", slug: "cherangany", image: "https://source.unsplash.com/600x400/?forest,10" },
];

export default function ExploreForestsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-4 font-peugeot">
          Explore Our Forests
        </h2>
        <p className="text-lg text-green-800 mb-12 max-w-2xl mx-auto font-peugeot">
          Discover the beauty and ecological diversity of Kenya's protected forests. Click to learn more about each forest.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {forests.map((forest, index) => (
            <Link key={forest.slug} href={`/forests/${forest.slug}`}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={forest.image}
                    alt={forest.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-green-900 font-peugeot">
                    {forest.name}
                  </h3>
                  <p className="text-sm text-green-700 mt-2 font-peugeot">
                    Click to learn more about {forest.name}.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
