var DNA = function(str) {
	this.sequence = str;
	this.nucleotideCounts;

	var counts = {A: 0, T: 0, C: 0, G: 0};
	for (var i = 0; i < this.sequence.length; i++) {
		counts[this.sequence[i]] ++;
	}
	this.nucleotideCounts = counts;
	doneCounting = true;
};

DNA.prototype.count = function(str) {
	var valid = ["A", "C", "G", "T", "U"];

	for (var i = 0; i < valid.length; i++) {
		if (str == valid[i]) {
			if (this.nucleotideCounts[str]) {
				return this.nucleotideCounts[str];
			} else {
				return 0;
			}
		}
	}
	throw "Invalid Nucleotide";
};

