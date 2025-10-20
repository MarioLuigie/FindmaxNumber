import * as Types from './lib/types';
import seed from './utils/seed';

{/** ROZWIĄZANIE NR 1 - Zastosowanie pętli for of */}
const getItemsMaxNumber = (items: Types.Items): number => {
	console.log('Your array:', items);

	let maxNumber: number = 0;
	const re = /\d+/;

	if (items.length) {
		for (const { name } of items) {
			const match = name.match(re);

			if (match) {
				const number = Number(match[0]);
				if (number > maxNumber) maxNumber = number;
			}
		}
	}
	return maxNumber;
};

console.log('Your max number from array:', getItemsMaxNumber(seed(5)));

{/** ROZWIĄZANIE NR 2 - ZASTOSOWANIE map i filter */}

// const getItemsMaxNumber = (items: Types.Items): number => {
// 	console.log('Your array:', items);

// 	const re = /\d+/;
// 	let numbers: number[] = [];

// 	if (items.length) {
// 		numbers = items
// 			.map(({ name }) => {
// 				const match = name.match(re);

// 				return match ? Number(...match) : undefined;
// 			})
// 			.filter((n) => n !== undefined);
// 	}

// 	return numbers.length ? Math.max(...numbers) : 0;
// };

// console.log('Your max number from array:', getItemsMaxNumber(seed(5)));
