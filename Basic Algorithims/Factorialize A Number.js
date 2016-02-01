//Factorlizae A Number Script


function factorialize(num) {
  var total = 1;
  for ( var i = 2; i <= num; i++) {
	total = total * i;   
}
  return total;
}

factorialize(5);