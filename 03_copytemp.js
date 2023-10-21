
function stringHands ()
{
var string = "     Hey you are doing good, keep it up      "
var length4 = string.length;
console.log(`2.Length of string is ${length4}`);

console.log(`3. removing extra spaces are, ${string.trim()}`);

var no1 = string.length;
var no2 = string.trim();
var no3 = no1 - no2.length;
console.log(`4.Length after trim is ${no3}`);

var ch = no2.charAt(0);
var ch2 = no2.length-1;
var ch3 = no2.charAt(ch2);

console.log(`5. first char is ${ch}, last char ${ch3}`); 
var wordCount = no2.split("");
console.log(`6.total words count is ${wordCount.length}`);
console.log(`7. searching index of word is ${no2.search("good")}`);
console.log(`8. printing substring is ${no2.slice(22)} ${no2.substring(22)}`);
console.log(`9. checking string ends word ${no2.includes("up")} ${no2.includes("Hey")}`);
}
stringHands();
