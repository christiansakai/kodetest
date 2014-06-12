var Matrix = function (str) {
	this.matArr = str.split('\n').map(function(el){
		return el.split(' ');
	});
	this.rows = this.getRows();
	this.columns = this.getCols();
	this.saddlePoints = this.getSaddlePoints();
};

Matrix.prototype.getRows = function() {
	var matArr = this.matArr;
	var rows = [];
	for (var i = 0; i < matArr.length; i++) {
		var stringyRow = matArr[i];
		var row = [];
		for (var j = 0; j < stringyRow.length; j++) {
			row.push(parseInt(stringyRow[j]));
		}
		rows.push(row);
	}
	return rows;
};

Matrix.prototype.getCols = function() {
	var rows = this.getRows();
	var numCols = rows.length;
	var cols = [];
	for (var i = 0; i < numCols; i++) {
		var col = [];
		for (var j = 0; j < numCols; j++) {
			var row = rows[j];
			col.push(row[i]);
		}
		cols.push(col);
	}
	return cols;
};

Matrix.prototype.getSaddlePoints = function() {
	var rows = this.rows, cols = this.columns;
	var largestInRow = [];
	// (row, col) == (1, 0)

	for (var i = 0; i < rows.length; i++) {
		var row = rows[i];
		var biggest = {
			num: row[0],
			row: 0,
			col: 0};
		for (var j = 1; j < row.length; j++) {
			var cell = row[j];
			if (cell > biggest.num) {
				biggest.num = cell;
				biggest.row = i;
				biggest.col = j;
			}
		}
		largestInRow.push(biggest);
	}

	var saddles = [];

	for (var k = 0; k < largestInRow.length; k++) {
		var colToCheck = largestInRow[k].col;
		var numToCheck = largestInRow[k].num;
		var smallest = true;
		for (var l = 0; l < cols[colToCheck].length; l++) {
			if (numToCheck > cols[colToCheck][l]) {
				smallest = false;
			}
		}
		if (smallest) {
			saddles.push([largestInRow[k].row, colToCheck]);
		}
	}
	return saddles;
};