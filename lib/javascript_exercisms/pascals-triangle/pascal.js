var Triangle = function (numRows) {
	this.rows = getRows(numRows);
	this.lastRow = this.rows[this.rows.length -1];
	function getRows (numRows) {
		rows = [[1]];
		for (var i = 1; i < numRows; i++) {
			var newRow = [];
			for (var j = 0; j < i+1; j++) {
				var prevRow = rows[i-1];
				var left = prevRow[j-1] || 0;
				var right = prevRow[j] || 0;
				newRow.push(left + right);
			}
			rows.push(newRow);
		}
		return rows;
	}
};