// ProductSimple.js

import React, { useState } from 'react';

const ProductSimple = ({ product }) => {
  const { title, description, images, url } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative">
          <img src={images[currentImageIndex]} alt={title} className="w-full h-64 object-cover" />
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 text-blue-600 hover:text-blue-700"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-10 text-blue-600 hover:text-blue-700"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                &gt;
              </button>
            </>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-700 mb-2">{description}</p>
          <a href={url} className="text-blue-600 hover:underline">
            View Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSimple;
