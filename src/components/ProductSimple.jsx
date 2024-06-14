import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const ProductSimple = ({ product }) => {
	const [ showModal, setShowModal ] = useState(false);

	return (
		<React.Fragment>
			<div className="flex flex-wrap lg:w-1/3">
				<div className="w-full p-5 md:p-2 card-zoom border-spacing-1 border-white-300 border-1">
					<img
						alt="gallery"
						className="block object-center w-full h-25 rounded-lg cursor-pointer card-zoom-image "
						src={product.img}
						onClick={() => setShowModal(true)}
					/>
					<div className="flex justify-center text-xl text-gray-800 card-zoom-text">{product.description}</div>
				</div>
			</div>

			{showModal ? (
				<ProductDetail setShowModal={setShowModal} product={product}></ProductDetail>
			) : null}
		</React.Fragment>
	);
};

export default ProductSimple;
