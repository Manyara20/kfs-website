// components/Exploreourforests.jsx
'use client';

import Link from 'next/link';

const forests = [
  {
    name: "Kakamega Forest",
    image: "/images/forests/kakamega.jpg",
    rating: 5,
  },
  {
    name: "Arabuko Sokoke Forest",
    image: "/images/forests/arabuko.jpeg",
    rating: 4,
  },
  {
    name: "Hombe Forest Guesthouse",
    image: "/images/forests/mau.jpg",
    rating: 3,
  },
  {
    name: "Karura Forest",
    image: "/images/forests/karura.jpg",
    rating: 5,
  },
  {
    name: "Ngong Forest",
    image: "/images/forests/ngong.jpeg",
    rating: 4,
  },
  {
    name: "Menengai Forest",
    image: "/images/forests/aberdare.jpeg",
    rating: 5,
  },
  {
    name: "Mt. Kenya Forest",
    image: "/images/forests/cheranganyi.jpg",
    rating: 4,
  },
  {
    name: "Mt. Elgon Forest",
    image: "/images/forests/mtelgon.jpeg",
    rating: 5,
  },
  {
    name: "Nairobi Arboretum",
    image: "/images/forests/mtelgon.jpeg",
    rating: 5,
  },
];

const slugify = (str) =>
  str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

const ForestCardGrid = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto py-6 px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2 text-shadow-lg tracking-wide">
            Explore our Forests
          </h1>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-white">
      {forests.map((forest, index) => (
        <Link key={index} href={`/forests/${slugify(forest.name)}`}>
          <div className="cursor-pointer relative squared-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
            <div className="relative">
              <img
                src={forest.image}
                alt={forest.name}
                className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h3 className="text-white text-lg font-semibold tracking-tight drop-shadow-md">
                {forest.name}
              </h3>
              <div className="flex justify-center mt-2">
                {[...Array(forest.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.853 1.416 8.26L12 18.897l-7.415 3.903 1.416-8.26L0 8.227l8.332-1.209z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default ForestCardGrid;
