import * as Types from './lib/types';
import seed from './utils/seed';

const getItemsMaxNumber = (items: Types.Items): number => {
	console.log('Your array:', items);

	let maxNumber: number = 0;
	const re = /\d+/;

	if (items.length) {
		for (const { name } of items) {
			const match = name.match(re);

			if (match) {
				const number = Number(...match);
				if (number > maxNumber) maxNumber = number;
			}
		}
	}
	return maxNumber;
};

console.log('Your max number from array:', getItemsMaxNumber(seed(5)));
