import deepCopy from '../utils/deepCopy.js';


const SORTED_COLOR = 'orange'
const LESS_COLOR = 'dodgerblue'
const MORE_COLOR = 'coral'
const PIVOT_COLOR = 'red'

const hlNodesBetween = (array, left, right, color) => {
    if (left >= right) return;
    for (let i = left; i <= right; i++) {
        const currentNode = array[i];
        currentNode.color = color;
    }
};

const hlNodes = (array, indexes, color) => {
    for (let index of indexes) {
        if (index < 0) continue;
        array[index].color = color;
    }
};

const hlNode = (array, index, color) => {
    if (!array[index]) return;
    array[index].color = color;
};

const algo = {};

algo.name = 'Quick Sort';
algo.routeName = 'quickSort';

algo.description =
    'Quicksort is an in-place sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be somewhat faster than merge sort and about two or three times faster than heapsort.';

algo.function = function* (data) {
    data = deepCopy(data);
    yield deepCopy(data);
    const swap = (data, left, right) => {
        const temp = data[left];
        data[left] = data[right];
        data[right] = temp;
    };
    function* partition(array, left, pivot) {
        const pivotValue = array[pivot].value;
        let i = left - 1;

        hlNodesBetween(array,left,pivot,'white')

        hlNode(array, left, MORE_COLOR);
        array[pivot].color = PIVOT_COLOR;
        yield deepCopy(data);

        for (let j = left; j < pivot; j++) {
            hlNode(array, j, MORE_COLOR);
            if (array[j].value < pivotValue) {
                i += 1;
                swap(array, i, j);
                hlNode(array, i, LESS_COLOR);
                yield deepCopy(data);
            }
            yield deepCopy(data);
        }
        array[pivot].pivot = false;
        swap(array, i + 1, pivot);
        array[i + 1].color = SORTED_COLOR;
        yield deepCopy(data)
        hlNodesBetween(array,i+2,pivot)
        return i + 1;
    }
    function* sort(array, left, right) {
        if(left === 0){
            hlNode(array,left,SORTED_COLOR)
        }
        if (left >= right) {
            if(!left)return
            hlNode(array,left,SORTED_COLOR)
            return
        };
        const p = yield* partition(array, left, right);

        yield* sort(array, left, p - 1);
        yield* sort(array, p + 1, right);
    }
    yield* sort(data, 0, data.length - 1);
    yield deepCopy(data);
};

export default algo;
