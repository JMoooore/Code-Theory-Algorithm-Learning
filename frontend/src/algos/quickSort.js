import deepCopy from '../utils/deepCopy.js';
import quickImage from '../images/quick_img.svg';
import {hlNode, hlNodes, hlNodesBetween} from '../utils/highlighting.js';
import  nextImage from '../images/merge_img.svg'


const SORTED_COLOR = 'orange'
const LESS_COLOR = 'dodgerblue'
const MORE_COLOR = 'coral'
const PIVOT_COLOR = 'red'


const algo = {};

algo.name = 'Quick Sort';
algo.routeName = 'quickSort';
algo.next = 'mergeSort'
algo.nextImage = nextImage
algo.image = quickImage
algo.replitCode = "https://replit.com/@EmpatheticLions/Quick-Sort?lite=true";


algo.description =
    'Quicksort is an in-place sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be somewhat faster than merge sort and about two or three times faster than heapsort.';

algo.explanation = 'Quicksort uses recursion to sort the array from smallest to largest value. First, the right most value is chosen as the pivot(shown in red). All of the unsorted values to the left of the pivot will be compared to the pivot. The numbers in blue are less than the value of the pivot. The numbers in coral are numbers that are greater than the pivot. The numbers will be sorted so that the coral numbers are closer to the pivot and all of the blue numbers to the left side. Once finished, the pivot will be placed in between the blue and coral numbers and then change to orange. This shows that the pivot is now sorted because all of the numbers less than the pivot are to the left and all of the numbers larger than the pivot are to the right. The process will repeat for sections of unsorted values(left to right).'

algo.complexity = 'Time Complexity: Best: O(n log n) or Worst: O(n^2)'

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
