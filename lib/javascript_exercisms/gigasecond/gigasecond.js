var Gigasecond = function (dateObj) {
	this.inputInMS = dateObj.getTime();
	this.gigaInMS = 1000000000000;

};


Gigasecond.prototype.date = function() {
	var result = new Date(this.inputInMS + this.gigaInMS);
	result.setMinutes(0);
	result.setSeconds(0);
	return result;
};
