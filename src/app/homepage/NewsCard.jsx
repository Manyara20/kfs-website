import Image from "next/image";

const NewsCard = ({ title, description, imageUrl, author, date, comments, className }) => {
  return (
    <div
      className={`bg-gray-100 shadow-lg flex-1 flex flex-col min-w-0 ${className}`} // flex-1 for equal width, flex-col for height control
    >
      <div
        className="h-62 bg-gray-300 flex-shrink-0" // Fixed height for image, no shrinking
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="p-4 flex flex-col flex-grow"> {/* flex-grow to fill remaining space */}
        <h3 className="text-green-900 font-extrabold text-center uppercase text-lg xl:text-xl">
          {title}
        </h3>
        <div className="flex items-center font-bold gap-4 text-sm xl:text-base text-black my-2">
          <span className="flex items-center gap-1">
            <Image src="/icons/user.png" alt="Author" width={16} height={16} />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Image src="/icons/calendar.png" alt="Date" width={16} height={16} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Image src="/icons/comment.png" alt="Comments" width={16} height={16} />
            {comments} Comments
          </span>
        </div>
        <p className="text-gray-700 text-base xl:text-lg flex-grow">{description}</p> {/* flex-grow ensures content stretches */}
        <div className="flex justify-center mt-4">
          <button className="text-black text-lg xl:text-xl font-extrabold hover:underline">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;