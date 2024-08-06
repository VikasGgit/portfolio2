import React from "react";

const Card = ({ image, title, subtitle, description, website, github }) => {
  return (
    <div className="block max-w-sm m-4 overflow-hidden text-white bg-gray-800 rounded-lg">
      <a href={website} target="_blank" rel="noopener noreferrer">
        {image ? (
          <img src={image} alt={title} className="w-full" />
        ) : (
          <div className="flex items-center justify-center w-full h-48 text-gray-300 bg-gray-700">
            <p>No Image Available</p>
          </div>
        )}
        <div className="p-4">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-2 text-sm font-medium">{subtitle}</p>
          <p className="mb-4 text-sm">{description}</p>
          <div className="flex space-x-4">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Website
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
