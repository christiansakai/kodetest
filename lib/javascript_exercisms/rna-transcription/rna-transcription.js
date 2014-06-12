function toRna (dna) {
	var result = '',
			dnaArray = dna.split('');
	for (var i = 0; i < dnaArray.length; i++) {
		switch(dnaArray[i])
		{
			case 'G':
				result+= 'C';
				break;
			case 'C':
				result+= 'G';
				break;
			case 'T':
				result+= 'A';
				break;
			case 'A':
				result+= 'U';
				break;
		}
	}
	return result;
}

// Was that it?
