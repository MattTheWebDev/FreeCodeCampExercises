//Function to find the longest word in a string

function findLongestWord(str) {
  var max = 0;
  var myString = str.split(' ');
  for (var i=0; i < myString.length; i++) {
  	if (max < myString[i].length) {
  		max = myString[i].length;
  	}
  }
  return max;
}
findLongestWord("The quick brown fox jumped over the lazy dog");