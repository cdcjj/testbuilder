// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var numArray = cardNumber.split('');
  if (numArray.length === 14){
  	if (numArray[0] + numArray[1] === "39" || numArray[0] + numArray[1] === "38"){
  		return "Diner's Club";
  	}
  }else if (numArray.length === 15) {
  	if (numArray[0] + numArray[1] === "34" || numArray[0] + numArray[1] === "37"){
  		return "American Express";
  	}
  }else if (numArray.length === 13 || 16 || 19){
  	if (numArray[0] === "4"){
  		return "Visa";
  	}else if (numArray.length === 16){ 
  		if (numArray[0] + numArray[1] === "51" || "52" || "53" || "54" || "55") {
  			return "Master Card";
  		}
  	}
  }
  return "Credit Card";
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

console.log(detectNetwork);

