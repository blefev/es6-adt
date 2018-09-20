const MyNode = require './linkedlist';

class TreeNode extends MyNode {
	constructor (value = null, edges = null) {
		this.value = value;

		if (edges) {
			if (edges.length === 1) {
				this.edges.push(edges);
			} else {
				edges.forEach(edge => {
					if (edge instanceof MyNode) {
						this.edges.push(edge);
					}
				})
			}
		}
	}

	traverse (fn) {
		// Get iterator
		let init = this[Symbol.iterator];

		init.next(fn);
	}
}

class Tree {
	constructor (item) {

	}
}

export { TreeNode, Tree };
