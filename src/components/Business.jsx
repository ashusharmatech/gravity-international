import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
	<div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
		<div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
			<img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
		</div>
		<div className="flex-1 flex flex-col ml-3">
			<h4 className="font-poppins font-semibold text-gray-900 text-[18px] leading-[23.4px] mb-1">{title}</h4>
			<p className="font-poppins font-normal text-gray-600 text-[16px] leading-[24px]">{content}</p>
		</div>
	</div>
);

const Business = () => (
	<section id="vision" className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				At Gravity International, <br className="sm:block hidden" /> we elevate industrial automation.
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				We have been dedicated to serving the industrial market since 2015 as a provider of customized automation solutions.
			</p>

			{/* <Button styles={`mt-10`} /> */}
		</div>

		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((feature, index) => <FeatureCard key={feature.id} {...feature} index={index} />)}
		</div>
	</section>
);

export default Business;
