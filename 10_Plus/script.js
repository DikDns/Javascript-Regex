//! Plus (+) Character to Iterate a group of letters that occur one or more

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);
console.log(result);
