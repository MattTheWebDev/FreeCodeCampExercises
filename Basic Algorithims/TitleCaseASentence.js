//Captalize the first letter of ever word in a sentence.

function titleCase(str) {
	var myString = str.split(" "); 
	var lowerString = [];
	for (var i = 0; i < myString.length; i++) {
		lowerString.push(myString[i].toLowerCase());
}
	for (var y = 0; y < lowerString.length; y ++) {
		  lowerString[y] = lowerString[y].charAt(0).toUpperCase() + lowerString[y].substr(1);
}	
	return lowerString.join(" ");
}

