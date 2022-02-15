import mergeImage from '../images/merge_img.svg';
import deepCopy from '../utils/deepCopy.js';
import { hlNode, hlNodes, hlNodesBetween } from '../utils/highlighting.js';
import nextImage from '../images/insert_img.svg'


const algo = {};

const ACTIVE_COLOR = 'dodgerblue';

algo.name = 'Merge Sort';
algo.routeName = 'mergeSort';
algo.next = 'insertionSort'
algo.nextImage= nextImage
algo.replitCode = 'https://replit.com/@EmpatheticLions/Merge-Sort?lite=true';

algo.description =
    'Merge sort is one of the most efficient sorting algorithms. It works on the principle of Divide and Conquer. Merge sort repeatedly breaks down a list into several sublists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.';

algo.explanation =
    'Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.';

algo.complexity = 'Time Complexity: O(n log n)';

algo.image = mergeImage;

algo.function = function* (data) {
    function* sort(data, temp, left, right) {
        if (left >= right) return;
        const mid = Math.floor(left + (right - left) / 2);
        yield* sort(data, temp, left, mid);
        yield* sort(data, temp, mid + 1, right);
        yield* merge(data, temp, left, mid, right);
        hlNode(data, mid, 'white');
    }
    function* merge(data, temp, leftStart, mid, rightEnd) {
        const leftEnd = mid;
        const rightStart = mid + 1;
        let i = leftStart;
        let j = rightStart;
        let k = leftStart;

        while (i <= leftEnd && j <= rightEnd) {
            hlNodes(data, [i, j], ACTIVE_COLOR);
            yield deepCopy(data);
            if (data[i].value < data[j].value) {
                temp[k] = data[i];
                hlNode(data, i, 'white');
                i += 1;
            } else {
                temp[k] = data[j];
                hlNode(data, j, 'white');
                j += 1;
            }
            hlNode(data, i, 'white');
            hlNode(data, j, 'white');
            k += 1;
        }
        arrayCopy(data, i, temp, k, leftEnd - i + 1);
        arrayCopy(data, j, temp, k, rightEnd - j + 1);
        arrayCopy(temp, leftStart, data, leftStart, rightEnd - leftStart + 1);
    }
    data = deepCopy(data);
    yield deepCopy(data);
    const temp = new Array(data.length);
    yield* sort(data, temp, 0, data.length - 1);
    hlNodesBetween(data, 0, data.length - 1, 'orange');
    yield deepCopy(data);
};

function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
}

export default algo;
