import React, { useState } from 'react';
import ProductsConfig from './ProductConfig'; // Adjust the path as per your file structure

const ProductView = () => {
  const [activeProduct, setActiveProduct] = useState(ProductsConfig[0]);

  const handleThumbnailClick = (photo) => {
    setActiveProduct({
      ...activeProduct,
      mainImage: photo,
      activeThumbnail: photo
    });
  };

  // Ensure the first image is active on load
  useState(() => {
    setActiveProduct({
      ...activeProduct,
      mainImage: activeProduct.photos[0],
      activeThumbnail: activeProduct.photos[0]
    });
  }, []);

  return (
    <div className="font-sans">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
              {activeProduct.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Product${index + 1}`}
                  className={`w-full cursor-pointer rounded-md ${activeProduct.activeThumbnail === photo ? 'border-2 border-blue-600' : ''}`}
                  onClick={() => handleThumbnailClick(photo)}
                />
              ))}
            </div>
            <img src={activeProduct.mainImage} alt="Product" className="w-4/5 rounded-md object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">{activeProduct.name}</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">${activeProduct.price}</p>
              <p className="text-gray-400 text-xl">
                <strike>$16</strike> <span className="text-sm ml-1.5">Tax included</span>
              </p>
            </div>

            <button
              type="button"
              className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
            >
              Enquiry
            </button>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">About the item</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>{activeProduct.description}</li>
                <li>Available sizes: {activeProduct.sizes.join(', ')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
