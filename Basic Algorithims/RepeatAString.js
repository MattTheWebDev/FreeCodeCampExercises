//Repeat a string n number of times.

function repeat(str, num) {
  var myString = "";
  for (var i = 0; i < num; i++) 
  {
    myString += str;
  }
  console.log(myString);
  return myString;
}

repeat("abc", 3);