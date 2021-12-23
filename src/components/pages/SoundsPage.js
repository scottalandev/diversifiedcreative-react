import React from 'react';
import { soundsInfoCards } from '../data/infoCardsData';
import { InfoCard, PageHead } from '../modules/displayModules';

function Sounds() {
	return (
		<div className="container">
			<PageHead
				title="Sounds"
				text="Original scores and innovative arrangements. Distinct editing and distinguished publishing. Production, recording, engineering, and
                tracking. Great sounds for any medium."
				image="img/sounds-head.jpg"
			/>
			<div className="row">
				{soundsInfoCards.map((info) => (
					<InfoCard info={info} key={info.id} />
				))}
			</div>
		</div>
	);
}

export default Sounds;
