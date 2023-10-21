


function stringHandsOn()
{
    var String = "   Hey you are doing good, keep it up     " ;
    console.log(`1. Given String is ${String} , 2. Total lenght is ${String.length}, 3.Removed extra Spaces ${String.trim()} 
   `);

    var space = String.length;
    var ind = String.trim();
    var resuult = String.length - ind.length;
    console.log(`4.lenght after trim is = ${resuult} `)
    
    var y = ind.charAt(0)  ; 
    var z = ind.length-1 ;
    var x = ind.charAt(z) ;
    console.log(`5. First Digit after trim is ${y} and Last Digit after trim is ${x} `);

    var words = ind.split("");
    console.log(`6. total words are ${words.length}`);

    console.log(`7. is ${String.indexOf("good")}`);

    console.log(String.slice(21), String.substring(21));

    console.log(String.includes("up"), String.includes("Hey"));
}
stringHandsOn(); 







