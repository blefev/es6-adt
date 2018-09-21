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

	add(val) {
		return this.setNext(val);
	}

    setNext(val) {
        if (val instanceof MyNode) {
            this.next = val;
        } else {
            this.next = new MyNode(val);
        }
	return this;
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
