// src/components/NewsCard.jsx

const NewsCard = ({ title, description, imageUrl, author, date, comments }) => {
    return (
      <div className="bg-gray-100 rounded-lg shadow-lg w-80 flex-shrink-0 mx-4">
        <div className="h-40 bg-gray-300 rounded-t-lg" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}></div>
        <div className="p-4">
          <h3 className="text-green-900 font-bold uppercase text-lg">{title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600 my-2">
            <span>👤 {author}</span>
            <span>📅 {date}</span>
            <span>💬 {comments} Comments</span>
          </div>
          <p className="text-gray-700">{description}</p>
          <button className="mt-4 text-black font-bold hover:underline">READ MORE</button>
        </div>
      </div>
    );
  };
  
  export default NewsCard;
  