const algo = {};

algo.name = 'bubbleSort';

algo.desciption =
    'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.';

algo.function = function* sort(data) {
    let unsortedLength = data.length;

    const swap = (i1, i2) => {
        const temp = data[i1].value;
        data[i1].value = data[i2].value;
        data[i2].value = temp;
    };
    while (unsortedLength >= 2) {
        for (let i = 0; i < unsortedLength - 1; i++) {
            const left = data[i];
            const right = data[i + 1];

            if (left.value > right.value) swap(i, i + 1);
        }
        unsortedLength--;
    }
};

export default algo
