var LinkedList = function () {
	this.head = undefined;
	this.tail = undefined;
};

var Node = function (number) {
	this.number = number;
	this.next = undefined;
	this.prev = undefined;
};

LinkedList.prototype.push = function(number) {
	var newNode = new Node(number);

	if (typeof this.head === "undefined" && typeof this.tail === "undefined") {
		this.head = newNode;
		this.tail = newNode;
	} else {
		var currentTail = this.tail;
		currentTail.next = newNode;
		newNode.prev = currentTail;
		this.tail = newNode;
	}
};

LinkedList.prototype.pop = function() {
	if (typeof this.head === "undefined" && typeof this.tail === "undefined") {
		return undefined;
	}

	var currentTail = this.tail;
	this.tail = currentTail.prev;
	return currentTail.number;
};

LinkedList.prototype.shift = function() {
	var currentHead = this.head;
	this.head = currentHead.next;
	return currentHead.number;
};

LinkedList.prototype.unshift = function(number) {
	var newNode = new Node(number);

	if (typeof this.head === "undefined" && typeof this.tail === "undefined") {
		this.head = newNode;
		this.tail = newNode;
	} else {
		var currentHead = this.head;
		currentHead.prev = newNode;
		newNode.next = currentHead;
		this.head = newNode;
	}
};

LinkedList.prototype.count = function() {
	var count = 0,
			currentNode = this.head;

	while (typeof currentNode !== "undefined") {
		currentNode = currentNode.next;
		count++;
	}
	return count;
};

LinkedList.prototype.delete = function(number) {
	var currentNode = this.head;

	if (this.count() === 1) {
		this.head = undefined;
		this.tail = undefined;
	} else {
		while (currentNode.number !== number) {
			currentNode = currentNode.next;
		}

		var previousNode = currentNode.prev;
		var nextNode = currentNode.next;

		previousNode.next = nextNode;
		nextNode.prev = previousNode;
	}
};



