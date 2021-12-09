import React from 'react';
import { webInfoCards } from '../data/infoCardsData';
import { InfoCard, PageHead } from '../modules/displayModules';

function Web() {
	return (
		<div className="container">
			<PageHead
				title="Web Development"
				text="Full service. Full-stack. Let us help you publish your products, ideas and creativity on the web."
				image="img/web-head.jpg"
			/>
			<div className="row">
				{webInfoCards.map((info) => (
					<InfoCard info={info} />
				))}
			</div>
		</div>
	);
}

export default Web;
