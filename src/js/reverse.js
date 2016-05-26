var inputString = "building";
var reverseString = "";
var i = inputString.length;

for (i; i > 0; i--) {
  reverseString += inputString.substring(i-1, i);
}
console.log(reverseString);
