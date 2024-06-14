import React from 'react';
import ProductSimple from './ProductSimple';

import {
	cocodev,
	bontag_gold,
	dafotrol_k2_7,
	dafotrol,
	dafo_xt_gold_tab,
	dafovital_gold_syp,
	gastin_ls,
	gastin_dsr,
	dafoace_rz,
	dafoace_sp,
	cgm,
	cortio,
	daflo_d3_fd,
	decofast_ls,
	dafobactum
} from '../assets/index.js';

var products = [
	{
		title: 'Cocodew',
		description: 'Natural way to rejuvenate',
		img: cocodev,
		url: 'https://www.1mg.com/otc/bonetag-gold-tablet-otc833949'
	},
	{
		title: 'Bonetag Gold',
		description: 'Perfect combination of Best calcium with Vit D3 and Zinc, Magnesium',
		img: bontag_gold,
		url: 'https://www.1mg.com/otc/bonetag-gold-tablet-otc833949'
	},
	{
		title: 'K2-7',
		description: 'Complete combination of Calcium with Vit K2-7',
		img: dafotrol_k2_7,
		url: 'https://www.1mg.com/otc/dafotrol-k2-7-softgel-capsule-soft-gelatin-capsule-otc530367'
	},
	{
		title: 'Dafo XT Gold',
		description: 'For regular use   ',
		img: dafotrol,
		url: 'https://www.1mg.com/drugs/dafo-xt-gold-tablet-835621'
	},
	{
		title: 'Dafo XT Gold',
		description: 'New age of Iron combination with Vit D3 and Methylcobalamin',
		img: dafo_xt_gold_tab,
		url: 'https://www.1mg.com/drugs/dafo-xt-gold-tablet-835621'
	},
	{
		title: 'Dafo XT Gold',
		description: 'New age of Iron combination with Vit D3 and Methylcobalamin',
		img: dafovital_gold_syp,
		url: 'https://www.1mg.com/drugs/dafo-xt-gold-tablet-835621'

	},
	{
		title: 'Gastin LS',
		description: 'Most effective PPI combination',
		img: gastin_ls,
		url: 'https://www.1mg.com/drugs/gastin-l-capsule-sr-712873'
	},
    {
		title: 'Gastin DSR',
		description: 'Most effective PPI combination',
		img: gastin_dsr,
		url: 'https://www.1mg.com/drugs/gastin-dsr-capsule-712871'
	},
    {
		title: 'Dafoace RZ',
		description: 'Choice of NSAID with PPI',
		img: dafoace_rz,
		url: 'https://www.1mg.com/drugs/dafoace-rz-capsule-sr-834072'
	},
    {
		title: 'Dafoace SP',
		description: 'Choice of NSAID',
		img: dafoace_sp,
		url: 'https://www.1mg.com/drugs/dafoace-sp-tablet-712865'
	},
	{
		title: 'CGM',
		description: 'Combination of Collagen Peptite',
		img: cgm,
		url: 'https://www.1mg.com/otc/cgm-strong-capsule-otc833980'
	},
	{
		title: 'Cortio',
		description: 'Most safe Glucocorticoids',
		img: cortio,
		url: 'https://www.1mg.com/drugs/cortio-tablet-834006'
	},
	{
		title: 'Daflo D3 FD',
		description: 'Newer type of packing in Vit D3',
		img: daflo_d3_fd,
		url: 'https://www.1mg.com/otc/daflo-d3-fd-soft-gelatin-capsule-otc834023'
	},
	{
		title: 'Decofast LS',
		description: 'Combination for productive Cough',
		img: decofast_ls
	},
	{
		title: 'Dafobactum',
		description: 'The leading Cephalosporin',
		img: dafobactum
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
