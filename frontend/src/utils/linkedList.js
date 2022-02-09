class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.previous = null;
    }
}
export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    }
}
