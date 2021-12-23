import React from 'react';
import { aboutUs } from '../data/infoCardsData';
import { PageHead } from '../modules/displayModules';

function About() {
	return (
		<div className="container">
			<PageHead
				title={aboutUs.title}
				text={aboutUs.text}
				image="img/dc-blk-full-logo.png"
			/>
		</div>
	);
}

export default About;
