import React from "react";
import Image from "next/image";

const NewsCard = ({
  title,
  description,
  imageUrl,
  author,
  date,
  comments,
  className,
  onClick,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={768}
        height={527}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#0E2E0E] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-gray-500 text-xs mb-1">{author} | {date}</p>
        <p className="text-gray-500 text-xs">Comments: {comments}</p>
      </div>
    </div>
  );
};

export default NewsCard;