DNA = function (dna) {
	this.sequence = dna;
};

DNA.prototype.hammingDistance = function(otherSeq) {
	var seq = this.sequence;
	var longerSeq = seq.length > otherSeq.length ? otherSeq.length : seq.length;
	var diff = 0;

	for (var i = 0; i < longerSeq; i++) {
		if (seq[i] !== otherSeq[i])
			diff++;
	}

	return diff;
};
