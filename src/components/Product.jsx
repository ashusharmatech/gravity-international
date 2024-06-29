// Product.js

import React, { useState } from 'react';
import ProductSimple from './ProductSimple';

import { n7100_1, n7100_2, n7100_3, n7100_4 } from '../assets/product_photos/index.js';
import { robot } from '../assets/index.js';

const products = [
  {
    category: 'Level Measurement Solutions (UWT)',
    items: [
      {
        title: 'NivoRadar ® - NR 7100',
        description: 'The non-contact 80 GHz FMCW radar sensor NivoRadar® NR 7100 with a narrow beam angle of 8° is used in various industrial applications in storage silos, process tanks and IBC containers for continuous level measurement. The free-radiating level transmitter has a compact design with a 1 1/2" process connection (PVDF) and a measuring range of up to 8 m as well as a very fast response time. The food-compliant radar devices are suitable for use in processes in the food industry. The radar level transmitters can be used in aggressive media such as acids, alkalis and solvents as well as in highly viscous liquids and oils.',
        images: [n7100_1, n7100_2, n7100_3, n7100_4],
      },
      // Add more products for Category A if needed
    ]
  },
  {
    category: 'Guided Wave Raders',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Level Switches',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flow & Pizo Meter with telemetry System',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flow Switch and Moisture Meansurement for Solid Media',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  },
  {
    category: 'Flanges and Fittings',
    items: [
      {
        title: 'Product B.1',
        description: 'Description for Product B.1',
        images: [robot, robot], // Example array of images
      },
      // Add more products for Category B if needed
    ]
  }
  // Add more categories and products as needed
];

const Product = () => {
  const [openCategories, setOpenCategories] = useState([]);

  const toggleCategory = (category) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter(item => item !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  return (
    <section id="products" className="overflow-hidden text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        {products.map((category, index) => (
          <div key={index} className="mb-4">
            <h2
              className="cursor-pointer text-lg font-semibold mb-2 flex items-center justify-between bg-blue-400 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition duration-300"
              onClick={() => toggleCategory(category.category)}
            >
              <span>{category.category}</span>
              <svg
                className={`ml-2 h-4 w-4 transform ${openCategories.includes(category.category) ? 'rotate-90' : ''} transition-transform duration-300`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </h2>
            <div className={`overflow-hidden transition-all duration-300 ${openCategories.includes(category.category) ? 'h-auto' : 'h-0'}`}>
              <div className="flex flex-wrap -m-2 mt-2">
                {category.items.map((product, i) => (
                  <ProductSimple product={product} key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
