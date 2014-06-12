var Queens = function (opt) {
	if (!!opt) {
		if (opt.white !== opt.black) {
			this.white = opt.white;
			this.black = opt.black;
		} else {
			throw new Error("Queens cannot share the same space");
		}
	} else {
		this.white = [0, 3];
		this.black = [7, 3];
	}
};

Queens.prototype.toString = function() {
	var black = this.black, white = this.white;
	var board = '';
	for (var rows = 0; rows < 8; rows++) {
		var row = '';
		for (var cols = 0; cols < 8; cols++) {
			var tile;
			if (cols === black[1] && rows === black[0]){
				tile = 'B';
			} else if (cols === white[1] && rows === white[0]) {
				tile = 'W';
			} else {
				tile = 'O';
			}
			if (cols === 7) {
				row += tile + '\n';
			} else {
				row += tile + ' ';
			}
		}
		board += row;
	}
	return board;
};

Queens.prototype.canAttack = function() {
	var black = this.black, white = this.white, attack = false;
	var xDiff = Math.abs(black[0] - white[0]);
	var yDiff = Math.abs(black[1] - white[1]);
	if (black[0] === white[0] || black[1] === white[1]) {
		attack = true;
	} else if (xDiff === yDiff) {
		attack = true;
	}
	return attack;
};