// components/MissionVisionGoal.js
import Image from "next/image";

const data = [
  {
    title: "Mission",
    image: "/images/aerial_forest.jpg",
    description:
      "Conservation, management, development and sustainable utilization of forests and allied resources for current and future generation.",
  },
  {
    title: "Vision",
    image: "/images/20210614_kenya-Kanaan-Mataathia_0312.webp",
    description:
      "To be an internationally recognized organization of excellence in knowledge-based sustainable forest resources development, conservation, and management.",
  },
  {
    title: "Strategic Goal",
    image: "/images/kenyas_goal_of_ac5f8973a9d77a1.jpg",
    description:
      "Sustainably manage all forests and build resilient forest ecosystems.",
  },
];

export default function MissionVisionGoal() {
  return (
    <div className="w-full p-4 md:p-6 bg-[#f5f5f5]">
      style={{
                fontFamily: "'Peugeot', Helvetica, sans-serif",
              }}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex"
          >
            <div className="relative h-[400px] flex flex-col justify-between w-full shadow-lg rounded-none">
              {/* Image Section */}
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2">
                  <h6
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
                  >
                    {item.title}
                  </h6>
                </div>
              </div>
              {/* Description Section */}
              <div className="flex-grow flex items-center px-4 lg:px-8">
                <p
                  className="text-gray-600 text-base text-center"
                  style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}