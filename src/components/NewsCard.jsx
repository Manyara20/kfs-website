// src/components/NewsCard.jsx
import Image from 'next/image';


const NewsCard = ({ title, description, imageUrl, author, date, comments }) => {
    return (
      <div className="bg-gray-100 rounded-t-3xl shadow-lg w-97 flex-shrink-0 mx-4">
        <div className="h-48 bg-gray-300 rounded-3xl " style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}></div>
        <div className="p-4">
          
          <h3 className="text-green-900 font-extrabold text-center uppercase text-lg">{title}</h3>
          <div className="flex items-center font-bold gap-4 text-sm text-black my-2">
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
          

          <p className="text-gray-700">{description}</p>
          <div className="flex justify-center">
              <button className="mt-4 text-black text-lg font-extrabold hover:underline">READ MORE</button>
          </div>

        </div>
      </div>
    );
  };
  
  export default NewsCard;
  