// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var numArray = cardNumber.split('');
  var arrLength = numArray.length;
  var twoPrefix = numArray[0] + numArray[1];
  var fourPrefix = twoPrefix + numArray[2] + numArray[3];
  if ((arrLength >= 12) && (arrLength <= 19)){
  	if (fourPrefix === "5018" || fourPrefix === "5020" || fourPrefix === "5038" 
  		|| fourPrefix === "6304") {
  		return "Maestro";
  	} else if (arrLength === 14){
  		if (twoPrefix === "39" || twoPrefix === "38") {
  			return "Diner's Club";
  		}
  	}else if (arrLength === 15) {
  		if (twoPrefix === "34" || twoPrefix === "37"){
  			return "American Express";
  		}
  	}else if (arrLength === 13 || arrLength === 16 || arrLength === 19){
  		if (numArray[0] === "4"){
  			return "Visa";
  		}else if (arrLength === 16){ 
  			if (twoPrefix === "51" || twoPrefix === "52" || twoPrefix === "53" || 
  				twoPrefix === "54" || twoPrefix === "55") {
  					return "MasterCard";
  			}else if ((fourPrefix === '6011') || (twoPrefix + numArray[2] === '644' ||
  				'645' || '646' || '647' || '648' || '649') || twoPrefix === '65'){
  					return "Discover";
  			}
  		}else if (arrLength === 19) {
  			if ((fourPrefix=== '6011') || (twoPrefix + numArray[2] === '644' ||
  				'645' || '646' || '647' || '648' || '649') || twoPrefix === '65'){
  				return "Discover";
  			}
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

