import React from "react";

const Article = ({ item }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center m-auto w-full lg:w-2/3 bg-white border rounded-md overflow-hidden shadow-md mb-5">
      <div className="lg:w-1/2 h-64">
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="p-4">
          <h2 className="text-2xl mb-2">{item.title}</h2>
          <p className="text-gray-700">{item.description}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-gray-100">
          <div className="flex items-center mb-2 lg:mb-0">
            <span className="text-sm text-gray-500 mr-2">
              Source: {item.publisher}
            </span>
            <span className="text-sm text-gray-500">Author: {item.author}</span>
          </div>
          <span className="text-sm text-gray-500">
            {new Date(item.timestamp).toLocaleDateString()}
          </span>
        </div>
        <div className="p-4">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
