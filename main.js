//Homework Week 6 Day 1
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// /--1--/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let string = dog_string.split(" ")
function findWords(dog_string){
  
    for(let i = 0; i < dog_names.length; i++)
    {
        if(string.includes(i.lowercase))
        {
            console.log('Match ' + dog_names);

        }
        else {
                return 'No Matches'
    }
}
 
}
console.log(findWords())

// /--2--/
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

var arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    
    for(let i = 0; i < arr.length; i++)
    {
        if (i % 2 == 0)
        {
            arr.splice(i, 1, 'even index')
           
        }
       
    }
    console.log(arr)
}
console.log(replaceEvens(arr))



    





// Basic JavaScript
// -- Variable Declarations -- 
// Primitive types in JavaScript - strings, integers, floats, arrays, objects
// String variable
name = 'Bill';
console.log(name)
// Integer Variable
some_num = 25;
console.log(some_num)
// Float
some_float = 3.14;
console.log(some_float)
// Arrays
some_array = [1, 2, 3, 4];
console.log(some_array)
// Some object
some_object = {'test':'Play this please'}
console.log(some_object)
// String Concatenation
statement = name + ' how are you?';
console.log(statement)
// Basic Arithmetic Operations
sum = 5 + 5;
console.log(sum)
product = 5 * 5;
console.log(product)
difference = 5 - 5;
console.log(difference)
divide = 5 / 5;
console.log(divide)
square = 5 ** 2;
console.log(square)
find_floor = Math.floor(25.2)
console.log(find_floor)
find_ceil = Math.ceil(25.5)
console.log(find_ceil)
// Mind bender
more_crazy = some_float + '4'
console.log(more_crazy)
// JavaScript Hoisting Example
console.log("BEFORE declaration: ", basketball_player)
var basketball_player = 'LeBron James'
console.log("After declaration: ", basketball_player)
// JavaScript let keyword
let nba_goat = 'Micheal Jordan';
console.log(nba_goat)
nba_goat = 'Kobe'
console.log(nba_goat)
// JS const keyword - ES6+ 
// const WILL NOT allow redeclaration NOR updating
const first_name = 'Aaron'
console.log(first_name)
/* JavaScript Function Creation
There are multiple ways of making a function */
// Regular Named Function
function addNums(){
    let num = 4;
    let num2 = 5;
    return num + num2
}
console.log(addNums())
// ES6 Arrow function
let addNums2 = () => {
    let num = 4;
    let num2 = 5;
    return num + num2
}
console.log(addNums2())
// Variable Name Function
let addNums3 = function(){
    let num = 4;
    let num2 = 5;
    return num + num2
}
console.log(addNums3())
// Functions with Parameters
function multiplyNums(num, num2){
    return num * num2
}
console.log(multiplyNums(4, 8))
// As arrow function
let multiplyNums2 = (num, num2) => {
    return num * num2
}
console.log(multiplyNums2(4, 8))
// Variable Function with parameter
let multiplyNums3 = function(num, nums2) {
    return num * nums2
}
console.log(multiplyNums3(4, 8))
// Self-invoking function
console.log((function () {
    let hello = 'Hello World';
    return hello
})())
// JavaScript Control Flow
function determineAge(age){
    if(age < 18){
        return 'Minor'
    } else if (age >= 18 && age <= 65){
        return 'Adult not retired'
    } else {
        return 'Elderly person, retired'
    }
}
console.log(determineAge(30))
// Ternary Operator -JS
function determineAge2(age){
    return (age < 18) ? 'Minor': (age >= 18 && age <= 65) ? 
    'Adult not yet retired' : 'Elderly Person Retired'
}
console.log(determineAge2(33))
// Loops in JavaScript - For Loops
// for keyword (counter; expression; incrementation/decrementation)
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting Stopped'
}
console.log(countByOne())
function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decreasing Stopped'
}
console.log(decreaseByOne())
// While Loop
function countWithWhile(){
    let i = 0;
    let text = "";
    while(i < 10){
        text += "This number is..." + i + "\n"
        i++
    }
    return text
}
console.log(countWithWhile())
// Do While Loop
function countWithDoWhile(){
    let i = 0;
    let text = '';
    do {
        text += 'This number is now...' + i + '\n'
        i ++
    }
    while(i > 10)
    return text
}
console.log(countWithDoWhile())
// JS Array
let groupOfNames = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty']
console.log(groupOfNames)
console.log(groupOfNames[1])
// JS Array Methods
// toString()
console.log(groupOfNames.toString())
// join()
console.log(groupOfNames.join(", "))
// forEach()
console.log(groupOfNames
    .forEach(element => {console.log(element)}))
// Using an Array value -- Search Method (for a String)
console.log(groupOfNames[0].search('T'))
// slice()
console.log(groupOfNames.slice(0, 3))
// splice()
console.log(groupOfNames.splice(3, 1, "Freddie"))
console.log(groupOfNames)
for(let i = 0; i < groupOfNames.length; i++){
    if (i % 2 == 0){
        groupOfNames.splice(i, 1, 'Goku')
    }
    console.log(groupOfNames)
}
