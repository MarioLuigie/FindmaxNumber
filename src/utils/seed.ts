import * as Types from '../lib/types';

class Item {
	name: string;

	constructor(name: string) {
		this.name = `${name} ${Math.floor(Math.random() * 100)}`;
	}
}

const seed = (numb: number) => {
	let items: Types.Item[] = [];
	for (let i = 0; i < numb; i++) {
		items.push(new Item('item'));
	}
	return items;
};

export default seed;
