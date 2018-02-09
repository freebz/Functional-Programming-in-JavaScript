// 3.5.3 Recursively difined data structures

const church = new Node(new Person('Alonzo', 'Church', '111-11-1111'));



class Tree {
    constructor(root) {
	this._root = root;
    }

    static map(node, fn, tree = null) {
	node.value = fn(node.value);
	if(tree === null) {
	    tree = new Tree(node);
	}

	if(node.hasChildren()) {
	    _.map(node.children, function (child) {
		Tree.map(child, fn, tree);
	    });
	}
	return tree;
    }

    get root() {
	return this._root;
    }
}



church.ppend(rosser).append(turing).append(kleene);
kleene.append(nelson).append(constable);
rosser.append(mendelson).append(sacks);
turing.append(gandy);



Tree.map(church, p => p.fullname);
