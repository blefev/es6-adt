# es6-adt
A collection of Javascript node-based abstract data structures (ADTs) that use iterators and other ES6 features.

## Node / Linkedlist

* Uses ES6 iterator and class
* Basis of other ADTs

#### Usage example
```javascript
const MyNode = require ('./src/linkedlist');

const printList = list => {
    for (let n of list) {
        console.log(n.getValue());
    }
};

/// Example 1
let l1 = new MyNode(1),
    node = l1;
    
for (let i = 2; i <= 10; i++) {
    let temp = new MyNode(i);
    node.setNext(temp);
    node = temp;
}

printList(l1);
// 1
// 2
// 3
// ...

// Example 2
let l2 = new MyNode(10);

// Set next can either take a node, or a value. If given a value, it creates the node
[20, 30, 40, 50, 60, 70, 80, 90, 100]
    .reduce((a, x) => a.setNext(x).next, l2);

printList(l2);
// 10
// 20
// 30
// ...

// Example 3
// Using spread syntax (...list) will expand each _node_. This can be taken advantage of for array methods:
[...l2].forEach(node => console.log(node.getValue());
// 10
// 20
// 30
// ...

[...l2].map(node => node.getValue());
// [10,20,30,40 ... ]
