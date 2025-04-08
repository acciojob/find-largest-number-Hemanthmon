function findLargest(a, b, c) {
 let maxNum

	if(a > b && a > c){
     maxNum = a
	} else if( b > c && c > b){
 maxNum = b
	} else {
     maxNum = c
	}
  return maxNum
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
