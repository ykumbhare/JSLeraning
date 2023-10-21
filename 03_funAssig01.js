
console.log("---two function with no argument---");

function yog()
 {
    console.log("===my name is Yogesh kumbhare====" );
 }
yog();


function personalDetails(firstName, lastName, CollegeName)
{
 console.log( "First Name is ==>", firstName, "==>last Name is -", lastName, "==>College name is - ", CollegeName);
 
}
personalDetails("Yogesh", "Kumbhare", "Sveri");

function Swap(ValueX, ValueY)
{
console.log( "===Before Swap===", ValueX, ValueY);
 var temp = ValueX;
 ValueX = ValueY;
 ValueY = temp;
 console.log("===After Swap===", ValueX, ValueY);
}
Swap(100, 200);
Swap("Yogesh", "Pooja");
Swap(1000, 2000);

console.log("==Part 4==");

function addThreeValues(ValueOne, ValueTwo, ValueThree) {
    console.log( ValueOne + ValueTwo + ValueThree);
   }
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");



