export let hlNodesBetween = (array, left, right, color) => {
    if (left >= right) return;
    for (let i = left; i <= right; i++) {
        const currentNode = array[i];
        currentNode.color = color;
    }
};

export let hlNodes = (array, indexes, color) => {
    for (let index of indexes) {
        if (index < 0) continue;
        array[index].color = color;
    }
};

export let hlNode = (array, index, color) => {
    if (!array[index]) return;
    array[index].color = color;
};
