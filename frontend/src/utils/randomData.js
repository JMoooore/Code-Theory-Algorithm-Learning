import randomBetween from './randomBetween.js';
export default function randomData(size, min, max) {
    const result = [];

    for (let i = 0; i < size; i++) {
        const randNum = randomBetween(min, max);
        result.push(randNum);
    }
    return result;
}
