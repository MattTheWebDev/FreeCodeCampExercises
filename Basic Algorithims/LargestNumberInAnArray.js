//Find the largest number of each sub array

function largestOfFour(arr) {
  // You can do this!
  
  return arr.map(function(x){return Math.max.apply(null, x);});
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
