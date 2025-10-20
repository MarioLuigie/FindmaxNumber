"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(name) {
        this.name = `${name} ${Math.floor(Math.random() * 100)}`;
    }
}
const seed = (numb) => {
    let items = [];
    for (let i = 0; i < numb; i++) {
        items.push(new Item('item'));
    }
    return items;
};
exports.default = seed;
