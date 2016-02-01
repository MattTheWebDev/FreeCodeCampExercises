/*
Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array.
*/


function chunk(arr, size) {
  var myChunk = [];
  for (var i = 0; i<arr.length; i+=size) {
  	myChunk.push(arr.slice(i,i+size)); // Push smaller array to myChunk array
  	
  } 
  return myChunk;
}

chunk(["a", "b", "c", "d"], 2);
