import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
	<section id="contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className="flex-[1] flex flex-col justify-start mr-10">
				<img src={logo} alt="hoobank" className="w-[266px] h-[72.14px] object-contain" />
				<p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
				Join Us on a Journey of Innovation and Excellence
				</p>
			</div>

			<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
				<div className="flex-[1] flex flex-col justify-start mr-10">
					<p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
						Gravity International 
						Plot No. 54, Gulabbari, Near East Point School, Rajasthan 305001
					</p>
				</div>
			</div>
		</div>

		<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
			<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray-900">
				Copyright Ⓒ 2024 Gravity International. All Rights Reserved.
			</p>

			<div className="flex flex-row md:mt-0 mt-6">
				{socialMedia.map((social, index) => (
					<SocialIcon key={index} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6': 'mr-0'}`} url={social.link} />
				))}
			</div>
		</div>
	</section>
);

export default Footer;
