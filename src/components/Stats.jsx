import React from 'react';
import styles from '../style';
import { stats } from '../constants';

const Stats = () => (
	<section id="home" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-b`}>
		{stats.map((stat) => (
			<div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
				<h4 className="font-poppins font-semibold xs:text-[40px] xs:leading-[53px] leading-[43px] text-gray-900">
					{stat.value}
				</h4>
				<h4 className="font-poppins font-normal xs:text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
					{stat.title}
				</h4>
			</div>
		))}
	</section>
);

export default Stats;
