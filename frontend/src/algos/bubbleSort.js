import bubbleImage from '../images/bubble_img.svg';
import deepCopy from '../utils/deepCopy.js';
import nextImage from '../images/quick_img.svg'
 
const ACTIVE_COLOR = 'dodgerblue';
const SORTED_COLOR = 'orange';

const algo = {};

algo.name = 'Bubble Sort';
algo.routeName = 'bubbleSort'
algo.image = bubbleImage;
algo.next = 'quickSort'
algo.nextImage = nextImage

algo.replitCode = "https://replit.com/@EmpatheticLions/Bubble-Sort?lite=true";

algo.description =
    'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.';

algo.explanation = `Bubble sort uses nested for loops to repeatedly swap values to move the greater value to the right. It will start by comparing the first two values and moving the larger value to the right. Next, both indices will increment and repeat this process until they reach the index of the first for loop. The first for loop will decrement becuase the last value of the array is now the largest and it will turn orange to show it has been sorted.`

algo.complexity = 'Time Complexity: O(n^2)'

algo.function = function* sort(data) {
    data = deepCopy(data);
    yield deepCopy(data);
    let unsortedLength = data.length;

    const swap = (i1, i2) => {
        const temp = data[i1].value;
        data[i1].value = data[i2].value;
        data[i2].value = temp;
    };
    while (unsortedLength >= 2) {
        for (let i = 0; i < unsortedLength - 1; i++) {
            let left = data[i];
            let right = data[i + 1];

            left.color = ACTIVE_COLOR;
            right.color = ACTIVE_COLOR;

            yield deepCopy(data);

            if (left.value > right.value) swap(i, i + 1);

            left.color = null;
            right.color = null;
        }
        data[unsortedLength - 1].color = SORTED_COLOR;
        unsortedLength--;
        yield deepCopy(data);
    }
    data[0].color = SORTED_COLOR;
    yield deepCopy(data);
};

export default algo;
