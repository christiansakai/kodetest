var School = function () {
this.kids = {};
}

School.prototype.roster = function() {
	for (var grade in this.kids) {
		this.kids[grade] = this.kids[grade].sort();
	}
	return this.kids;
};

School.prototype.add = function(name, grade) {
	if (this.kids[grade]) {
		this.kids[grade].push(name)
	} else {
		this.kids[grade] = [name];
	}
};

School.prototype.grade = function(num) {
	return this.kids[num] ? this.kids[num].sort() : [];
};

