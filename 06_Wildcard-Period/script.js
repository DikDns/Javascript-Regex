//! Wildcard Period (.)
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/i;
let result = unRegex.test(exampleStr);
console.log(result);
