const num1=document.getElementById("num1");
const num2=document.getElementById("num");
const result=document.getElementById("result");
const calculate= document.getElementById("calculate");
document.getElementById("demo").innerHTML="sum calculator";


calculate.addEventListener("click", function(){
   result.innerHTML= num1.value + num2.value;
})
/*
1. View and edit CSS  temporarily (using the styles panel in the elements tab)

2. check what JavaScript causing a change to an element. Find the element in question, in the Elements tab. Right-click and go to 'Break on...'. Select 'attribute modifications'

3. Debug JavaScript
There is a debug panel in the sources tab where you can pause the application at different points, And view the variable states at that point.

4. Check your console(using the console panel) and log things into the console.
*/

//console.log( "hello my friends")

//console.log("hello my %s", "friends")

//console.log("%chello my friends", "font-size:50px")

//console.warn("your are dead")

//console.error("i fond anera!")

//console.assert(2===2,"wrong") 
//console.assert(2===3,"wrong") 



//let p=document.getElementById("result")
//console.log(p) 
//console.dir(p) 


/*
console.group("wow"); 
console.log("start"); 
console.log("middle"); 
console.log("finish"); 
console.groupEnd("wow");

console.groupCollapsed("wow"); 
console.log("start"); 
console.log("middle"); 
console.log("finish"); 
console.groupEnd("wow");
*/


/*
console.count("niza"); 
console.count("anna"); 
console.count("niza"); 
console.count("anna");
*/


/*
console.time("cat"); 
fetch('https://catfact.ninja/fact')
.then((response) => response.json()  
.then((data) => console.log(data)); 
console.timeEnd("cat");
*/


/*
let journal = [  
{events: "work", time: "6:00 AM"},  
{events: "ice cream", time: "4:30 PM"}, 
{events: "beer", time: "6:00 PM"} 
]; 
console.table(journal);
*/

//console.clear();