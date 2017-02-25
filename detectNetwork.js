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
  var threePrefix = twoPrefix + numArray[2];
  threePrefix = Number.parseInt(threePrefix);
  var fourPrefix = threePrefix + numArray[3];
  var fourNum = Number.parseInt(fourPrefix);
  var sixPrefix = fourPrefix + numArray[4] + numArray[5];
  sixPrefix = Number.parseInt(sixPrefix);


  if ((arrLength >= 12) && (arrLength <= 19)){
  	if (fourPrefix === "5018" || fourPrefix === "5020" || fourPrefix === "5038" || fourPrefix === "6304") {
  		return "Maestro";
  	}else if (arrLength >= 16 && arrLength <= 19){
  		if ((threePrefix >= 624 && threePrefix <= 626) || (fourNum >= 6282 && fourNum <= 6288) || (sixPrefix >= 622126 && sixPrefix <= 622935)) {
  			return "China UnionPay";
  		}else if (arrLength === 16 || arrLength === 19){
  			if (arrLength === 16){ 
	  			if (twoPrefix === "51" || twoPrefix === "52" || twoPrefix === "53" || twoPrefix === "54" || twoPrefix === "55") {
	  					return "MasterCard";
	  			}else if ((fourPrefix === '6011') || (threePrefix >= 644 && threePrefix <= 649) || twoPrefix === '65'){
	  					return "Discover";
	  			}else if ((fourPrefix === "4903" || fourPrefix === "4905" || fourPrefix === "4911" || fourPrefix === "4936"|| 
            fourPrefix === "6333" || fourPrefix === "6759") || (sixPrefix === 564182 || sixPrefix === 633110)){
  					return "Switch";
  				}else if (numArray[0] === '4'){
	  				if (fourPrefix !== "4903" || fourPrefix !== "4905" || fourPrefix !== "4911" || fourPrefix !== "4936"){
	  					return "Visa";
	  				}
	  			}
	  		}else if (arrLength === 19) {
	  			if ((fourPrefix=== '6011') || (threePrefix >= 644 && threePrefix <= 649) || twoPrefix === '65'){
	  				return "Discover";
	  			}else if ((fourPrefix === "4903" || fourPrefix === "4905" || fourPrefix === "4911" || fourPrefix === "4936"|| 
            fourPrefix === "6333" || fourPrefix === "6759") || (sixPrefix === 564182 || sixPrefix === 633110)){
            return "Switch";
          }else if (numArray[0] === '4'){
            if (fourPrefix !== "4903" || fourPrefix !== "4905" || fourPrefix !== "4911" || fourPrefix !== "4936"){
              return "Visa";
            }
          }
  			}
  		}else if (arrLength === 18){
  			if ((fourNum === 4903 || fourNum === 4905 || fourNum === 4911 || fourNum === 4936 || fourNum === 6333 || 
            fourNum === 6759) || (sixPrefix === 564182 || 633110)){
  				return "Switch";
  			}
  		}
  	}else if (arrLength === 13){
  		if (numArray[0] === '4'){
  			return "Visa";
  		}
  	}else if (arrLength === 14){
  		if (twoPrefix === "39" || twoPrefix === "38") {
  			return "Diner's Club";
  		}
  	}else if (arrLength === 15) {
  		if (twoPrefix === "34" || twoPrefix === "37"){
  			return "American Express";
  		}
  	}
  }
  return "Credit Card";
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

// When there is time: try to put the Credit Cards (name, max/min, prefix, and length) in an Object and solve with that.

console.log(detectNetwork);

