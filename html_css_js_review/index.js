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

function alternative(value){
    var result = ''
    if(value > 10){
        //result is reassigned based on condition.
        result = 'greater than 10'
    }else{
        //result is reassigned based on condition.
        result = 'less than 10'
    }
    //returning current 'result' based on condition.
    return result
}
alternative(20)

function basedOnState(value){
    var state = false
    var message = ''
    if(value === 'on'){
        message = 'lights on'
        state = true
    }else{
        message = 'lights off'
        state = false
    }
    return message
}
basedOnState('on')
basedOnState('off')

/*
If you have multiple conditions that need to be addressed, 
you can chain if statements together with "else if" statements.
*/

function withinRange(value){
    if(value < 100){
        return 'out of range'
    }else if(value <= 100){
        return 'out of range'
    }else if(value > 200){
        return 'out of range'
    }else if(value >= 200){
        return 'out of range'
    }else{
        return 'within range'
    }
}
withinRange(100)
withinRange(200)
withinRange(101)
withinRange(199)

//hash table data structure.
var newHash = {
    'key0':'foo',
    'key1':'bar',
    'key2':'baz'
}
console.log(newHash['key0'])
console.log(newHash.key0)
console.log(newHash.key1)
console.log(newHash.key2)

//js challenge Golf Code
/* 
    = assignment operator, == equality operator,
    === strict equality operator.
*/

//global scoped variables accessed within function.
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if(strokes == 1){
  return names[0]
}else if(strokes <= par - 2){
  return names[1]
}else if(strokes == par - 1){
  return names[2]
}else if(strokes == par){
  return names[3]
}else if(strokes == par + 1){
  return names[4]
}else if(strokes == par + 2){
  return names[5]
}else if(strokes >= par + 3){
  return names[6]
}
  return "Change Me";
}
golfScore(5, 4);

/*
    switch statements
*/

function useSwitch(val){
    var level = ''
    switch(val){
        case 1:
            return level = 'alpha';
        break;
        case 2:
            return level = 'beta';
        break;
        case 3:
            return level = 'gamma';
        break;
        case 4:
            return level = 'delta';
        break;
        default:
            return level = 'data error';
        break;
    }
}
useSwitch(1)
useSwitch(2)
useSwitch(5)

/*
    switch statementS; add a default 
    value/option.

    In a switch statement you may not be able to specify all possible 
    values as case statements. Instead, you can add the default 
    statement which will be executed if no matching case 
    statements are found. Think of it like the 
    final else statement in an if/else chain.
*/
function useNewSwitch(value){
    var software = ''
    switch(value){
        case 'a':
            return software = 'html';
            break;
        case 'b':
            return software = 'css';
            break;
        case 'c':
            return software = 'javascript';
            break;
        case 'd': 
            return software = 'react.js'
            break;
        case 'e':
            return software = 'jsx';
            break;
        // use of default option.
        default:
            return software = 'node.js'
            break;
    }
    return answer
}
useNewSwitch('a')
useNewSwitch('e')

/*
js switch statements; multiple identical options in switch statements

If the break statement is omitted from a switch statement's case, 
the multiple, consecutive case statement(s) are executed until a break is 
encountered. If you have multiple inputs with the same output, 
you can represent them in a switch statement. All assigned the same
value.
*/

function backToBackSwitchCases(val){
    var software = '';
    switch(val){
        case 1:
        case 2:
        case 3:
            software = 'front end web development'
            break;
        case 4:
        case 5:
        case 6:
            software = 'back end web development'
            break;
        default:
            software = 'systems administration'
            break;
    }
    return software
}
backToBackSwitchCases(3)
backToBackSwitchCases(6)

/*
replace if/else statements with switch statements.

if we have many options
a switch case statement may be easier to 
write than many if/else statements.
*/

function getValue(value){
    var valueIdentified = ''
    if(value < 100){
        return valueIdentified = 'value out of range'
    }else if(value <= 100){
        return valueIdentified = 'value out of range'
    }else if(value > 200){
        return valueIdentified = 'value out of range'
    }else if(value >= 200){
        return valueIdentified = 'value out of range'
    }else{
        return valueIdentified = 'value identified within range'
    }
}
getValue(150)
getValue(250)
getValue(250)

function getProperValue(value){
    var valueIdentified = ''
    switch(value){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            valueIdentified = 'value out of range';
            break;
        case 10:
            valueIdentified = 'value identified';
            break;
        default:
            valueIdentified = 'value out of range';
    }
    return valueIdentified;
}
getProperValue(10)
getProperValue(20)
getProperValue(5)

/*
returning a boolean from functions &
comparison operators.

sometimes we can use an if/else 
statement to return a boolean based
on a condition. we can also return
a boolean (true, false; based on conditions)
with use of certain comparison operators
and no if/else statement.
*/

function returnBoolean(value_a, value_b){
    return value_b <= value_a
}
returnBoolean(6, 7)
returnBoolean(7, 6)

/*
return early pattern from functions

a function will end execution
when a 'return' statement is
reached and control returns
to the calling location.
*/

function sendNumber(a, b){
    if(a < 0 || b < 0){
        return undefined
    }
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
sendNumber(3, 3)
sendNumber(2, 2)
sendNumber(-1, -2)
sendNumber(1, 1)
sendNumber(0, 0)

/*
js challenge;
counting cards

 count change; +1 
 count change; 0
 count change; -1

 cards: 2, 3, 4, 5, 6
 cards: 7, 8, 9
 cards: 10, 'J', 'Q', 'K', 'A'

 use if/else change for conditioning
 or switch statement.

 return count based on its value concatenated with string.
*/
let count = 0
function countCards(card){
    //set card and count values based on conditions/cases.
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--
            break;
    }
    //return string based on count value.
    if(count > 0){
        return count + ' Bet'
    }else{
        return count + ' Hold'
    }
}
countCards(2)
countCards(10)
countCards(7)


/*
Build js objects
object values can be accessed via 'properties'
properties are made up of key values that store data.
*/
var newObject = {
    language:'javascript',
    development:'user interface',
    library:'react.js'
}

/*
accessing object properties with dot.notation

dot notation is used to access object properties/values
when we know that name of the properties.
*/
var devLanguage = newObject.language
console.log(devLanguage)
var devType = newObject.development
console.log(devType)
var devLibrary = newObject.library
console.log(devLibrary)

/*
accessing object properties with dot.notation

bracket notation can be used to access object
properties/values for props that have spaces in their names.
can also be used for props that do not have spaces,
those that do have spaces have to be strings when 
initialized and accessed. bracket noted props need to be strings.
dot noted props do not need to be strings.
*/

var techObject = {
    'systems admin':'linux os',
    'front end web development':['html', 'css', 'js', 'react.js'],
    'back end web development':'node.js'
}

var systemsManagement = techObject['systems admin']
console.log(systemsManagement)
var webDevelopment = techObject['front end web development']
console.log(webDevelopment)
var serverSideDevelopment = techObject['back end web development']
console.log(serverSideDevelopment)

/*
accessing object props/values with variables.

properties can be stored and accessed from 
within a variable and used in bracket notation.
*/

var myTech = {
    myFavLang: 'javascript',
    myFavOs: 'linux',
    myFavLib: 'react'
}
//storing object prop/value within a variable as a string.
var bestLangTech = 'myFavLang'

//storing accessed object prop variable within variable.
var browserLang = myTech[bestLangTech]

//logging value of new variable.
console.log(browserLang)
//javascript

var bestOsTech = 'myFavOs'
var customOs = myTech[bestOsTech]
console.log(customOs)


var bestDevLib = 'myFavLib'
var componentLib = myTech[bestDevLib]
console.log(componentLib)

var goatObj = {
    1:'MJ',
    2:'Kobe',
    3:'LeBron'
}

var first = 1
var bestToDoIt = goatObj[first]
console.log(bestToDoIt)

var second = 2
var goatsClone = goatObj[second]
console.log(goatsClone)

var third = 3
var thirdInLine = goatObj[third]
console.log(thirdInLine)

/*
updating object properties

can update an object property using
dot or bracket notation.
*/

var testObj = {
    name:'aaron',
    alias:'',
    programming:'front end web development'
}
var myName = 'name'
//updated obj property value.
var newName = testObj[myName] = 'coder'
console.log(newName)

var myAlias = 'alias'
var newAlias = testObj[myAlias] = 'cyberman'
console.log(newAlias)

var myProgramming = 'programming'
var newProgramming = testObj[myProgramming] = 'user interface development'
console.log(newProgramming)

/*
add new properties to a js object

*can add a property to an object using
bracket or dot notation & assign it data
*/
var testObj1 = {
    first:1,
    second:2
}

testObj1['third'] = 12
console.log(testObj1)

testObj1.fourth = 1212
console.log(testObj1)

testObj1.fifth = 123 + ', fifth'
console.log(testObj1)

testObj1.fifth = 12121212 + ', fifth'
console.log(testObj1)

/*
delete data from an object

*use delete statement to delete data from
an object along with dot notation
or bracket notation.
*/
var testObj2 = {
    'structure':'html',
    'presentation':'css',
    'behavior':'javascript',
    'reusability':'react.js',
    'state management':'redux',
    'back end development':'node.js'
}
delete testObj2['back end development']
console.log(testObj2)

/*
using objects for lookups

can use objects to look up 
data values instead of if/else
and switch statements.

use obj[bracket-notation](no string)
to look up the functions parameter.
*/
function dataLookUp(val){
    var data = ''
    var softwareArchive = {
        'virtualOs':'linux',
        'devOs':'macOs',
        'scriptingLang':['bash', 'python'],
        'devLang':['javascript','jsx']
    }
    //data variable is assigned the object lookup of function parameter.
    data = softwareArchive[val]
    return data
}
dataLookUp('devOs')

//object look up and reassignment
var testObj3 = {
    'systemsAdmin':'linux',
    'frontEnd':'macOs',
    'automation':['bash', 'python'],
    'componentReUse':'react.js'
}
var systemsPro = 'systemsAdmin'
var objData = testObj3[systemsPro]
console.log(objData)

//reassigns object key:value data.
var newLinuxDist = testObj3['systemsAdmin'] = 'red hat linux'

//look up new key:val data.
testObj3[newLinuxDist]
//log data.

//reassign key:value data
testObj3['systemsAdmin'] = 'centOs stream'
//delete unwanted key:value data
delete testObj3['sysadmin']
//log data.
console.log(testObj3)


/*
Testing objects for properties

test if a function
contains a specific property
using hasOwnProperty() method.
*/
function testObj(obj, checkForProp){
    if(obj.hasOwnProperty(checkForProp)){
        return `${obj[checkForProp]}; ${true}`
    }else{
        return 'not found'
    }
}
testObj(
    {html:'structure', 
    css:'presentation', 
    javaScript:'behavior'},
    'javaScript'
)

//working with complex object; c.o. can contain any object or data type.
var complexObj = {
    technologies:[
        'html',
        'css',
        'javascript',
        'react.js'
    ],
    itSkills:{
        systemsAdmin:'linux os',
        shellScripting:[
            'bash',
            'python'
        ]
    }
}

//accessing nested properties in a complex object
var complexObjData = complexObj.technologies
//complexObjData = complexObj['technologies']
console.log(complexObjData)
complexObjData = complexObj.itSkills.shellScripting
complexObjData = complexObj.itSkills.shellScripting[1]
console.log(complexObjData)

var devComplexObj = {
    devTechnologies:[
        'html',
        'css',
        'javascript',
        'react.js'
    ],
    sysItSkills:{
        systemsAdmin:'linux os',
        shellScripting:[
            'bash',
            'python'
        ]
    }
}
var systemsSoftware = devComplexObj.sysItSkills
systemsSoftware = devComplexObj.sysItSkills.systemsAdmin
console.log(systemsSoftware)

systemsSoftware = {
    itSkills:['linux', 'python', 'bash', 'networking'],
    shellScripting:'automation'
}

var newSoftwareObj = systemsSoftware.itSkills
console.log(newSoftwareObj)

systemsSoftware = {
    'itSkills':['linux', 'python', 'bash', 'networking'],
    shellScripting:'automation'
}
//bracket notation good for 'string' properties.
newSoftwareObj = systemsSoftware['itSkills']

/*
Accessing Nested Arrays

objects can contain both nested objects and nested arrays. 
Similar to accessing nested objects, array bracket 
notation can be chained to access nested arrays.
*/

var nestedTechObjs = [
    {
        developmentTech:'user interface',
        software:[
            'html',
            'css',
            'js',
            'react'
        ]
    },
    {
        systemsTech:'systems administration',
        software:[
            'linux os',
            'bash',
            'python',
            'automation',
            'firewalls'
        ]
    }
]
console.log(nestedTechObjs[0].software[3])

var newlyObj = {
    101:{
        array:['a', 'b', 'c']
    }
}
console.log(newlyObj[101].array)


//while loop; runs a loop as long as a condition is true.
//while loop that loops every even number between 0 and/including 100.
function useWhileLoop(){
    var count = 0
    var newArray = []
    while(count <= 100){
        newArray.push(count)
        count += 2
    }
    console.log(newArray)
}
useWhileLoop()


//for loop, nested for loop, odds, evens, product, total.
//finding the sum of a variable and elements in a nested array.
function nestedLoop(){
    var leveledArray = [
        [1, 2], [3, 4], [5, 6]
    ]
    var total = 0
    for(var i = 0;i < leveledArray.length;i++){
        for(var j = 0;j < leveledArray[i].length;j++){
            total += leveledArray[i][j]
        }
        console.log(total)
    }
}
nestedLoop()

//iterating through odd numbers within an array with a for loop.
function oddLoops(){
    var empty = []
    for(var i = 1;i <= 50; i += 2){
        empty.push(i)
    }
    console.log(empty)
}
oddLoops()

//iterating through odd numbers in reverse order array with a for loop.
function reverseOddLoops(){
    var empty = []
    for(var i = 49; i >= 1; i -= 2){
        empty.push(i)
    }
    console.log(empty)
}
reverseOddLoops()

/*
looping through a nested array with nested loops, 
finding sum of variable and array elements.
*/
function nestedSum(){
    var nested = [
        [1,2], [3,4], [5,6], [7,9], [10,11], [12]
    ]
    var sum = 0
    for(var i = 0;i < nested.length;i++){
        for(var j = 0;j < nested[i].length;j++){
            sum += nested[i][j]
        }
        console.log(sum)
    }
}
nestedSum()



/*
do...while loop; runs all code at least once, keeps
running as long as condition is true. stops
as when condition is false.
*/
function useDoWhileLoop(){
    var empty = []
    var i = 0
    do{
        empty.push(i)
        i++
    }while(i <= 5)
    console.log(empty)
}
useDoWhileLoop()

/*
do...while loop that iterates and 
pushes a single number to an empty array.
*/
function doWhileTrue(){
    var emptyArr = []
    var i = 1
    do{
        emptyArr.push(i)
        i++
    }while(i <= 2)
    console.log(emptyArr)
}
doWhileTrue()

/*
do...while loop that iterates
and adds even numbers to an 
empty array.
*/
function doWhileEven(){
    var empty = []
    var i = 0
    do{
        empty.push(i)
        i += 2
    }while(i <= 20)
    console.log(empty)
}
doWhileEven()

/*
do...while loop that 
iterates and adds odd numbers
to an empty array.
*/
function doWhileOdd(){
    var empty = []
    var i = 1
    do{
        empty.push(i)
        i += 2
    }while(i <= 100)
    console.log(empty)
}
doWhileOdd()

/*
do..while loop that
reverse iterates numbers
within an array.
*/

function doWhileReversed(){
    var empty = []
    var i = 100
    do{
        empty.push(i)
        i -= 3
    }while(i >= 0)
    console.log(empty)
}
doWhileReversed()

// //replacing loops with recursion
// function sum(arr, n){
//     //base case
//     if(n <= 0){
//         return 0
//     //recursive case
//     }else{
//         return sum(arr, n - 1) + arr[n - 1]
//     }
// }
// sum([1, 2, 3, 5], 4)

var array = [1, 2, 3, 5]
console.log(array.length - 1)//3


//first solution; using while loop
//make a pile of boxes to look through
//while the piles isn't empty
//grab a box
//if you find a key; done
//if you find a box add it to the pile of boxes
//repeat steps



//second solution; clearer
//look through every item in box
//key; done
//box; repeat


/*
recursion; base case; function does not call 
itself again base/condition reached

recursion; recursive case; function calls itself 
when base case/condition is not reached.
*/

//function being expressed in terms of itself/recursion
function multiply(arr, n){
    var product = 1
    for(var i = 0; i < n;i++){
      product *= arr[i]
    }
    return product
  }
  multiply([1, 2, 3], 3)


  function product(arr, n){
    //base case
    if(n <= 0){
        return 0
    //recursive case
    }else{
        return sum(arr, n - 1) + arr[n - 1]
    }
}
product([1, 2, 3], 3)

//profile look up; using for-loop and nested if statements.
var contacts = [
    {
        'firstName':'cyberman',
        'language':'javascript',
        'framework':'react.js',
        'developmentType':['front end', 'user interface', 'web development']
    },
    {
        'firstName':'sysAdmin_1',
        'language':'bash',
        'framework':'terminal',
        'developmentType':['scripting', 'automation']
    },
    {
        'firstName':'programmer_1',
        'language':'python',
        'framework':'django',
        'developmentType':['back end', 'server side', 'database']
    }
]

function contactLookUp(name, prop){
    for(var i = 0; i < contacts.length;i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)){
                console.log(contacts[i][prop])
            }else{
                console.log('No such property')
            }
        }
    }
    console.log('No such contact')
}
contactLookUp('cyberman', 'developmentType')

//generate random decimals/fractions with Math.random()
function generateRandomDec(x){
    while(x < 1){
        console.log(Math.random())
        break;
    }
}
generateRandomDec(0)

//generating a whole number between 0 and 10.
function generateWholeNum(){
    console.log(Math.floor(Math.random() * 11))
}
generateWholeNum()



































































































