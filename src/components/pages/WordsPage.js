import React from 'react';
import { wordsInfoCards } from '../data/infoCardsData';
import { InfoCard, PageHead } from '../modules/displayModules';

function Words() {
	return (
		<div className="container">
			<PageHead
				title="Words"
				text="Putting ideas on a page. Forging words into art. Honing meaning and voice. Crafting clear, clever content. Making statements with
                sentences."
				image="img/words-head.png"
			/>
			<div className="row">
				{wordsInfoCards.map((info) => (
					<InfoCard info={info} />
				))}
			</div>
		</div>
	);
}

export default Words;
