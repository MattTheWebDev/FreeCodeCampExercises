//Simple script to find palindromes



function palindrome(str) {
 var myString = str.replace(/[^\w]|_/g, "").toLowerCase();
 var reverse = myString.split('').reverse().join('');
if (myString == reverse) {
return true;
}
else {
	return false;
}
}


palindrome("eye");