//Truncate a String, if string > num and return with a ... ending

function truncate(str, num) {
  if (str.length > num) {
  		if (num <= 3) {
  	 	var sliceStr = str.slice(0,num);
  	 	sliceStr += "...";
  	 	return sliceStr;
  		}
  		else 
  		{
  		var numMinus = num-3;
  		var newStr = str.slice(0,numMinus) + "..." +     str.slice(numMinus);
  		sliceStr = newStr.slice(0,num);
  		return sliceStr;
  		}
	}
  else {return str;}
}

