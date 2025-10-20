"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = __importDefault(require("./vendors/seed"));
const getItemsMaxNumber = (items) => {
    console.log('Your array:', items);
    let maxNumber = 0;
    if (items.length) {
        for (const { name } of items) {
            const match = name.match(/\d+/);
            if (match) {
                const number = Number(...match);
                if (number > maxNumber)
                    maxNumber = number;
            }
        }
    }
    return maxNumber;
};
console.log('Your max number from array:', getItemsMaxNumber((0, seed_1.default)(5)));
