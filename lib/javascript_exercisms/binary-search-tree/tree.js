var Bst = function (data) {
	this.data = data;
	this.left = undefined;
	this.right = undefined;
};

var Node = function (data) {
	this.data = data;
	this.left = undefined;
	this.right = undefined;
};

Bst.prototype.insert = function(data, curNode) {
	var newNode = new Node(data);
	curNode = curNode || this;

	if (newNode.data > curNode.data) {
		if (typeof curNode.right === "undefined" ) {
			curNode.right = newNode;
		} else {
			curNode = curNode.right;
			this.insert(data, curNode);
		}
	} else if (newNode.data <= curNode.data) {
		if (typeof curNode.left === "undefined") {
			curNode.left = newNode;
		} else {
			curNode = curNode.left;
			this.insert(data, curNode);
		}
	}
};

Bst.prototype.each = function(func, curNode) {
  if(!curNode) {
    curNode = this;
  }

  if (curNode.left) {
    Bst.prototype.each(func, curNode.left);
  }
  func(curNode.data);
  if (curNode.right) {
    Bst.prototype.each(func, curNode.right);
  }
};