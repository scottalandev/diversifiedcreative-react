import React from 'react';
import { homeInfoCards } from '../data/infoCardsData';
import { InfoCard } from '../modules/displayModules';

function Home() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>Serving Creativity Daily</h1>
					<h2>
						Diversified Creative is multi-services creative firm with a special emphasis in words and sounds, and a passion for helping creative
						people realize their vision.
					</h2>
				</div>
			</div>
			<div className="row">
				{homeInfoCards.map((info) => (
					<InfoCard info={info} />
				))}
			</div>
		</div>
	);
}

export default Home;
