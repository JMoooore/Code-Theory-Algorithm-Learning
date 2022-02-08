import randomBetween from './randomBetween.js';
export function randomData(size, min, max) {
    const result = [];

    for (let i = 0; i < size; i++) {
        const randNum = randomBetween(min, max);
        result.push(randNum);
    }
    return result;
}

export function randomNodes(size,min,max){
    return randomData(size,min,max).map((value) => {
        return {value}
    })

}
