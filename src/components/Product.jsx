import React from 'react';
import ProductSimple from './ProductSimple';

import {
	robot
} from '../assets/index.js';

var products = [
	{
		title: 'Distance Sensor',
		description: 'Natural way to rejuvenate',
		img: robot,
		url: 'https://www.1mg.com/otc/bonetag-gold-tablet-otc833949'
	}
];

const Product = () => {
	return (
		<section id="products" className="overflow-hidden text-gray-700 ">
			<div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
				<div className="flex flex-wrap -m-1 md:-m-2">
					{products.map(function(object, i) {
						return <ProductSimple product={object} key={i} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Product;
