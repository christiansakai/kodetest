var Matrix = function (str) {
	this.matArr = str.split('\n').map(function(el){
		return el.split(' ');
	});
	this.rows = this.getRows();
	this.columns = this.getCols();
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