var Beer = function () {

};

Beer.prototype.verse = function(num) {
	if (num === 1) {
		return '' + num + ' bottle of beer on the wall, ' +
				num + ' bottle of beer.\n' + 'Take it down and pass it around, no more bottles of beer on the wall.\n';
	} else if (num === 0) {
		return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
	} else if (num === 2){
			return '' + num + ' bottles of beer on the wall, ' +
						num + ' bottles of beer.\n' + 'Take one down and pass it around, ' +
						(num - 1) + ' bottle of beer on the wall.\n';
	} else {
		return '' + num + ' bottles of beer on the wall, ' +
					num + ' bottles of beer.\n' + 'Take one down and pass it around, ' +
					(num - 1) + ' bottles of beer on the wall.\n';
	}
};

Beer.prototype.sing = function(start, stop) {
	if (typeof stop === 'undefined') {
		stop = 0;
	}
	var song = '',
			booze = this,
			numVerses = start - stop;
	for (var i = 0; i <= numVerses; i++) {
		song+= booze.verse(start - i);
		if (i !== numVerses) {
			song+='\n';
		}
	}
	return song;
};
