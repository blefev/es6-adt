module.exports  = class MyNode {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    [Symbol.iterator]() {
        let n = this;

        return {
            next() {
                if (!n) {
                    return {
                        done: true
                    }
                };
                let cur = n;

                n = n.next;
                return {
                    value: cur,
                    done: false
                }
            }
        }
    }

    setNext(val) {
        let ret;
        if (val instanceof MyNode) {
            this.next = val;
            ret = val;
        } else {
            ret = new MyNode(val);
            this.next = ret;
        }
        return ret;
    }

    getNext() {
        return this.next;
    }

    setValue(value) {
        this.value = value;
        return this;
    }

    getValue() {
        return this.value;
    }
};

/* Examples

console.log('::: l1 :::');

let l1 = new MyNode(1),
    node = l1;
for (let i = 2; i <= 10; i++) {
    let temp = new MyNode(i);
    node.setNext(temp);
    node = temp;
}


for (let n of l1) {
    console.log(n.getValue());
}

console.log('');

console.log('::: l2 :::');

let l2 = new MyNode(10);
[20, 30, 40, 50, 60, 70, 80, 90, 100].reduce((a, x) => a.setNext(x), l2);

for (let n of l2) {
    console.log(n.getValue());
}
*/
