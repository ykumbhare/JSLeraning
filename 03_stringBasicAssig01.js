
function stringBasics ()
{
    console.log("My Dream Company is Accenture" );
}

stringBasics ();

console.log("=== Part 2===")

var hobby1 = "cricket";
var hobby2 = "chess";
var hobby3 = "trading is my hobby and making reasearch is also";

console.log(hobby1, hobby2, hobby3);

var totalLenght = hobby1.length + hobby2.length + hobby3.length
console.log("Total Length is", totalLenght);

var charAt = hobby1.charAt(1);
console.log(charAt);

var lastdigit = hobby1.charAt (hobby1.length-3);
console.log(lastdigit);



console.log("------- new -------");


var indexOfI = hobby1.indexOf('i') ;
console.log(hobby1.indexOf('k'));

var fn = "y";
var ln = "K";
var result = ln.concat(fn);
console.log(result);
console.log("------- new -------");
var res = hobby1.replace("cricket", "Watching Movies");
console.log(res);

console.log("------- trim -------");
var tr = "    Good morning    ";
tr.length;
console.log("before", tr.length);
var est = tr.trim()
console.log("After",est.length);
console.log("------- Includes -------");

var yo = hobby1.includes("ric");
console.log(yo);

console.log("------- Search -------");

var yy = hobby1.search("et");
console.log(yy);

console.log("------- Slice -------");
var lala = hobby2.slice(2, 4);
console.log("half Portion is ", lala);

console.log("------- Split -------");
var poo = hobby3.split (" ");
console.log(poo);
console.log(poo.length);
console.log(`I am UI Developer`);

console.log("------- String Template -------");
var num1 = 5 ;
var numb2 = 6 ;
var results = num1 + numb2;
    console.log (`Total is,  ${results}`);