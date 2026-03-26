"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimeter = exports.area = void 0;
const area = (width, length) => {
    return length * width;
};
exports.area = area;
const perimeter = (width, length) => {
    return (length * 2) + (width * 2);
};
exports.perimeter = perimeter;
