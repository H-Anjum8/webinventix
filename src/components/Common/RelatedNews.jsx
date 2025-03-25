import React from "react";
import { Link } from "react-router-dom";

// Dummy related news data
const relatedNews = [
  {
    id: 1,
    title: "Optimizing Fleet Operations: A Case Study in Logistics Optimization",
    image: "https://source.unsplash.com/600x400/?logistics,truck",
  },
  {
    id: 2,
    title: "Implementing Advanced Proctoring Technology at a High-Volume Student Testing Center",
    image: "https://source.unsplash.com/600x400/?student,technology",
  },
];

const RelatedNews = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h2 className="text-xl font-bold mb-4">Related News</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedNews.map((news) => (
          <Link
            to={`/news/${news.id}`}
            key={news.id}
            className="relative block group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Background Image */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center p-6">
              <h3 className="text-white text-lg font-semibold">
                {news.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
