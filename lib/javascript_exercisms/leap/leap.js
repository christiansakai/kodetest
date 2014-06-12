function isLeapYear (year) {
	var divisFour = year % 4 === 0;
	var divisHund = year % 100 === 0;
	var divisFourHund = year % 400 === 0;

	if (divisFourHund && divisHund) {
		return true;
	} else if (divisFour && divisHund) {
		return false;
	} else if (divisFour){
		return true;
	} else{
		return false;
	}
}
