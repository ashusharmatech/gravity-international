import { products } from '../constants';
import styles, { layout } from '../style';
import ProductSimple from './ProductSimple';


const Billing = () => (
	<section id="products" className={layout.sectionReverse}>
		<div className="pt-6 pb-12 bg-gray-300">
			{products.map(function(object, i) {
				return <ProductSimple product={object} key={i} />;
			})}
		</div>
	</section>
);

export default Billing;
