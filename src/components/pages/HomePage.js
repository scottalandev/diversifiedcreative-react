import React from 'react';
import { homeInfoCards } from '../data/infoCardsData';
import { InfoCard, PageHead } from '../modules/displayModules';

function Home() {
	return (
		<div className="container">
			<PageHead
				title="Serving Creativity Daily"
				text="Diversified Creative is multi-services creative firm with a special emphasis in words and sounds, and a passion for helping creative people realize their vision."
				image="img/web-head.jpg"
			/>
			<div className="row">
				{homeInfoCards.map((info) => (
					<InfoCard info={info} />
				))}
			</div>
		</div>
	);
}

export default Home;
