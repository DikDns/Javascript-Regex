//! Negated Character (^)
let quoteSample = "3 blind mice.";
let myRegex = /[^aiueo|^0-9]/gi;
let result = quoteSample.match(myRegex);
console.log(result);
