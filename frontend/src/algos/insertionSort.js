import insertionImage from '../images/insert_img.svg'
import deepCopy from '../utils/deepCopy'

const algo = {}

algo.name = 'Insertion Sort'
algo.routeName = 'insertionSort'

// algo.replitCode = "https://replit.com/@EmpatheticLions/Insertion-Sort?lite=true";

algo.description = 'Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.'

algo.explanation = `The last index of the 'sorted' values is chosen and the first index of the 'unsorted ' values is chosen to compare. If the last index of the sorted values is larger than the first index of the unsorted values,  they will swap and the compared indices will decrement so that it will keep swapping until it finds a number it is larger than or equal to. Now the sorted section is one larger and the for loop will increment i to move on to the next value.`

algo.complexity = 'Time Complexity: O(n^2)'

algo.image = insertionImage

algo.function = function* insertion(data) {
    data = deepCopy(data);
    yield deepCopy(data);
    for(let i = 1; i < data.length; i++){
        let current = i
        let h = i - 1
        
        while(data[h]?.value > data[current]?.value && h > -1){
            data[current].color = 'dodgerblue'
            data[h].color = 'dodger'
            yield deepCopy(data)

            let temp = data[current]
            data[current] = data[h]
            data[h] = temp
            data[current].color = 'white'
            data[h].color = 'white'
            current--
            h--
        }
    }
    yield deepCopy(data)
    data.forEach((element)=>{
        element.color = 'orange'
    })
    yield deepCopy(data)

}


export default algo
