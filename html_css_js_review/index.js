//JS practice;
//variables/restoring/arithOperators

var newVar;
newVar = 1

var newVar1 = 10
var sum = newVar + newVar1 * 2

//dividing
var sumQuotient = sum / 2


//incrementing
sumQuotient++
sumQuotient += 2

//decrementing
sumQuotient--

//creating a decimal number in js
var myDecimalVar = 0.1
myDecimalVar++

//multiplying decimal numbers
myDecimalVar * 2.5

//dividing two decimal numbers
var newQuotient = myDecimalVar / 2.5
newQuotient

//finding a reminder of two numbers
var remainder = 10 % 3
remainder

//compound assignments
var a = 1
a += 1

var b = 2
b += a

var c = 3
c += c






//js practice; compound division operator

var mathDivVar = 24
mathDivVar /= 3

//js string variables; escape string, single and double quotes.
var myStringVar = 'new string'
myStringVar

var escapedString = 'this is an escaped \"string variable\".'
escapedString

var singleQuotes = 'This string uses "\single quotes\".'
singleQuotes

var aposterpheVar = "it\'s an aposterphe string."
aposterpheVar

var leveledEscape = "FirstLine\n\t\SecondLine\n\ThirdLine"
leveledEscape = "FirstLine\n\SecondLine\n\ThirdLine"

//js string concatenation with + operator.
var myConCatString = 'First half. ' + 'Second half.'
myConCatString += ' This is the third string.'

//js constructing/concatenating strings with a variable.
var myLang = 'javaScript'
var myLangLib = 'React.js is built with '
myLangLib += myLang

//can find the length of a string; .length property.
var stringLength = 'this string has a certain length'
stringLength.length

//find a zero-indexed character in a string using bracket notation.
stringLength[4]
stringLength[0]

/*
find the first indexed letter of newStringLength 
and assign it to stringLength
*/
stringLength = ''
var newStringLength = 'new string sentence'
stringLength = newStringLength[0]

/*
string literals are immutable and cannot 
be changed once created. But can assign
variable a new string.
*/
var myGreeting = 'jyberman; react front developer'
var trueDevAlias = 'cyberman; '
var devLib = 'react.js'
var devTyped = ' end '
myGreeting = trueDevAlias + devLib + ' front' + devTyped + 'developer'


/*
finding the nth letter of a string;
bracket notation.
*/

var aNewStringedName = 'alias name'
var assignedLetter = aNewStringedName[3]
assignedLetter





//js review; returning the last letter, Nth letter in a string.
var stringedName = 'cyberman'
var lastLetter = stringedName[stringedName.length - 1]
lastLetter

stringedName = 'cyberman dev'
var indexedLetter = stringedName[stringedName.length - 4]
//stringedName.length = 12; 12 - 4 = 8
indexedLetter//returns 8th indexed string character.

//js mad libs word game; filling in the blank spaces with variables
var noun = 'developer'
var verb = 'typed'
var adjective = 'front end'
var adVerb = 'urgently'
var myString = 'The ' + adjective + ' ' + noun + ' ' + adVerb + ' ' + verb + ' a new string.'

//js arrays
var myArray = [1, 'javaScript']
/*
    js nested arrays/multi dimensional array;
    an array of arrays.
*/
var nestedArray = [
    ['html5', 'css3'], 
    ['javaScript', 'react.js'],
    ['redux', 'node.js']
]

//access array data with bracket notation.
var nestedData = nestedArray[0]

//modify array data with indexes
nestedArray[0] = ['jsx', 'css objects']

//accessing multi-dimensional arrays with indexes.
var nestedIndices = nestedArray[1][1]

//modify arrays with .push() method
nestedArray.push(['redux', 'node.js'])
/*
        var nestedArray = [
        ['html5', 'css3'], 
        ['javaScript', 'react.js'],
        ['redux', 'node.js']
    ]
*/


//finding the length of an array.
nestedArray.length

/*
    remove the last element 
    from an array with .pop() method; 
    returns the last removed item from an array.
*/

var newNestedArray = [
    ['front end development', 'javaScript runtime'],
    ['react.js', 'node.js']
]

var lastItemRemoved = newNestedArray.pop()
//returns; ['react.js', 'node.js']

/*
    remove the first element 
    from an array with .shift() method; 
    returns the first removed item from an array.
*/
var firstItemRemoved = newNestedArray.shift()
//newNestedArray is empty.

/*
    add the first element 
    to an array with .unshift() method; 
    adds the first item from an array.
*/

newNestedArray.unshift([
    'user interface development', 
    'run js apps outside a browser'
])

//multi-dimensional/nested-array; shopping list

var technologyListArray = [
    ['html version;', 5],
    ['css version;', 3],
    ['javaScript version;', 7],
    ['react.js version;', 17]
]

//write reusable code with functions
function reusableFunction(){
    console.log('this function is reusable.')
}
reusableFunction()

/*
    Global scope and functions.
    scope; refers to the visibility of variables. 
    Variables which are defined outside of a function block have Global scope. 
    This means, they can be seen everywhere in your JavaScript code.
*/

var myGlobal = 10

function funOne(){
    //myLocal value is only seen within funOne.
    //cannot be accessed within funTwo.
   myLocal = 5
}

function funTwo(){
    //local variable set to empty string.
    var outPut = ''
    if( typeof myGlobal != 'undefined'){
        outPut += 'my global: ' + myGlobal
    }
    if( typeof myLocal != 'undefined'){
        outPut += 'my local: ' + myLocal
    }
    //myLocal will be ignored
    return outPut
}
funTwo()


/*
    local scope and functions.
    local scope; Variables which are declared within a function, 
    as well as the function parameters, have local scope. 
    That means they are only visible within that function.
*/

//both global and local vars will be logged out.
var myAlias = 'aaron'
function localFunOne(myAlias){
    console.log(myAlias)
}
localFunOne('cyberman')
console.log(myAlias)

/*
Global vs local scope in functions.
Variables with the same name in global & 
local occur & LOCAL variables will take precedence.
*/

//global scope will be ignored
var twin = '0'
function firstClass(twin){
    //local scoped var will be returned
    return typeof twin
}
firstClass(0)

/*
    return a value from a function with 'return'.
    we can pass values into a function as arguments
    then return value from outside of the function.
*/

function addAName(name){
    return name += 'man'
}
addAName('cyber')

/*
    understanding undefined
    value returned from a function.
    functions with no 'return' keyword
    will return undefined.
*/
//function returns undefined
var sum = 0
function addNumbs(){
    //no return keyword
    sum = sum + 1
}
addNumbs()

//function returns the sum of two numbers.
function addNumbs1(){
    return sum = sum + 1
}
addNumbs1()

/*
    assignment with a return value
    can store an invoked function within 
    a variable.
*/
var processedFun = ''
function newFun(num){
    return (num + 100)/6
}
processedFun = newFun(6)

/*
    Stand in line; queue
    Queue; abstract data structure that
    that adds an element to the end of
    a queue and removes the first item from 
    the beginning of the queue.
*/
function addToQueue(array, item){
    //adding an element to end of an array.
    array.push(item)
    //removing the first item from an array.
    item = array.shift()
    console.log(item)
    console.log(array)
}
addToQueue([1, 2, 3, 4, 5], 6)

/*
understanding boolean values.
Booleans; true & false like on an off 
switches.
*/

/*
use conditional logic if statements
pseudoscode;
if(condition is true){
    statement is executed
}
*/
//function that evaluates and returns an even value
function evenValue(number){
    //code will run if true
    if(number % 2 === 0){
        return true
    }
    //code will run if false
    var notEven = false
    return notEven + ': odd value'
}
evenValue(49)

//function that evaluates for and returns an odd value
function oddVal(number){
    //returns an odd value if true
    if(number % 3 === 1){
        return 'odd value'
    }else{
    //identifies an even value if false
        return 'even value'
    }
}
oddVal(30)


/*
comparison with an equality (==) operator.
* == uses type coercion.
*/
function coerceTypes(valType){
    if(valType == 15){
        return 'loosely equal'
    }
    return 'not equal'
}
//not equal.
coerceTypes(14)
//loosely equal/type coercion.
coerceTypes('15')
//not equal.
coerceTypes('14')
//loosely equal/type coercion.
coerceTypes("15")

//Comparison with the Strict Equality Operator (===).
//does not perform a type coercion/conversion.
function strictValues(value){
    if(value === 10){
        return true
    }
    return false
}
//returns false; value is a string type.
strictValues('10')

/*
compare different values with the equality (==)
operator and the strictly equals operator (===), 
'typeof' operator.
*/
function compareDataTypes(a, b){
    if(typeof a === typeof b){
        return 'data types are equal'
    }
    return 'data types are not equal'
}
compareDataTypes(1,2)
compareDataTypes(1,'2')

/*
comparison with the inequality operator (!=)
*/
function useUnequal(value){
    if(value != 3){
        return 'unequal'
    }
    return 'equal'
}
useUnequal('b')
useUnequal('3')
useUnequal(true)

/*
comparison with the inequality operator (!==)
*/
function strictUnequal(value){
    if(value !== true){
        return 'strictly unequal'
    }
    return 'equal'
}
strictUnequal(1)
strictUnequal(true)

/*
comparison with the greater than operator (>)
*/
function greaterThan(value){
    if(value > 100){
        return 'greater than 100'
    }
    if(value > 10){
        return 'greater than 10'
    }
    return '100 and under, 10 an under'
}
greaterThan(-100)
greaterThan(101)
greaterThan(11)

/*
comparison with the greater than or equal to operator.
>=
the greater then, or equal to operator will convert data types
like the loosely equal(==) to or the inequality operator(!=).
*/

function greaterOrEqualTo(value){
    if(value >= 5){
        return '5 and over'
    }

    if(value >= 15){
        return '15 and over'
    }
}
greaterOrEqualTo(6)

/*
less than operator (<)
converts data types.
*/

function lessThan(value){

    if(value < 4){
        return 'under 4'
    }

    if(value < 55){
        return 'under 55'
    }
    return 'over 4 and 55'
}
lessThan(2)
lessThan(22)

/*
comparison with the less than or equal to operator
(<=)
the less than or equal to (<=) converts data.
number on the left less than or equal to 
number on the right; true : false.
*/
//global scoped variable
let value = 100
function lessThanOrEqualTo(){
    if(`${value}` <= 10){
        return 'less than or equal to 10'
    }
    if(`${value}` <= 50){
        return 'less than or equal to 50'
    }
    return `${value} is greater than 10 and 50.`
}
lessThanOrEqualTo()

/*
comparison with the logical and operator (&&).

sometimes you will need to test more than one thing at a time. 
the logical and operator (&&) returns true 
if and only if the operands to the left and right of it are true.
*/

//searching for value between 100 and 200.
function nestedIfFun(value){
    //checks for both conditions simultaneously.
    if(value > 100){
        if(value < 200){
            return 'between 100 and 200'
        }
    }
    return 'not between 100 and 200'
}
nestedIfFun(101)
nestedIfFun(15)
nestedIfFun(200)
nestedIfFun(199)
nestedIfFun(100)


//searching for value greater then or equal to 100 (&&) less than or equal to 200.
function useLogicalAndOp(value){
    if(value >= 100 && value <= 200){
        return 'between 100 and 200.'
    }
    return 'not between 100 and 200.'
}
useLogicalAndOp(5)
useLogicalAndOp(101)
useLogicalAndOp(99)


/*
comparison with the logical or operator(||).

The logical or operator (||) 
returns true if either of the operands is true. 
Otherwise, it returns false.
*/

//searching for values within range between 10 and 20.
function multiIfs(values){
    if(values < 10){
        return 'out of range'
    }

    if(values > 20){
        return 'out of range'
    }

    return 'within range.'
}
multiIfs(8)

//searching for values within range between 10 and 20.
function useLogicalOrOp(values){
    if(values < 10 || values > 20){
        return 'out of range'
    }
    return 'within range'
}
useLogicalOrOp(50)
useLogicalOrOp(5)
useLogicalOrOp(15)

/*
introducing else statement.

When a condition for an if statement is true, 
the block of code following it is executed. 
What about when that condition is false? Normally nothing would happen. 
With an else statement, an alternate block of code can be executed.
*/











































