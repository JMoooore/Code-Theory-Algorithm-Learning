import bubbleImage from '../images/bubble_img.svg';
import deepCopy from '../utils/deepCopy.js';

const ACTIVE_COLOR = 'dodgerblue';
const SORTED_COLOR = '#d8ae5e';

const algo = {};

algo.name = 'Bubble Sort';
algo.routeName = 'bubbleSort'

algo.image = bubbleImage;

algo.replitCode = "https://replit.com/@EmpatheticLions/Bubble-Sort?embed=true";

algo.description =
    'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.';

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
