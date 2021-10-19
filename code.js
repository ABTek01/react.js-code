/*codecademy js exercises*/

//program that converts kelvin to celsius and celsius to fahrenheit//

//constant variable named kelvin, set to a temperature.
const kelvin = 0
/*
kelvin temp in celsius is 273 degrees less than current
kelvin temp.
*/
const celsius = kelvin - 273

/*calculation within fahrenheit converts celsius temp to fahrenheit.*/
let fahrenheit = celsius * (9/5) + 32

/*round down fahrenheit to avoid decimal.*/
fahrenheit = Math.floor(fahrenheit)
console.log(
  `The temperature is ${fahrenheit} degrees is fahrenheit.`
)


/*
    program that converts 'human years' into 'dog years'.
*/
//my age variable
let myAge = 30

//first two years of a dog's life.
let earlyYears = 2
earlyYears = earlyYears * 10.5

// accounted for the first two years
let laterYears = myAge - 2

// the number of dog years accounted for by your later years.
laterYears = laterYears * 4

//my age in dog years.
const myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears)

//using string method.
const myName = 'AARON'.toLowerCase()

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years ols in dog years.`
)

/*
    if, else if, else statement, 
    logical operator and short circuiting 
*/

//program checks if created username is less than or equal to 10 characters long
let username = 'cyberman_90'
if(username.length <= 10 ){
    console.log(`${username}: valid`)
}else{
    console.log(`${username}: invalid please enter a new username.`)
}

username = 'cyberman90'
if(username.length <= 10 ){
    console.log(`username ${username}: valid`)
}else{
    console.log(`username ${username}: invalid please enter a new username.`)
}

//short circuiting
let language;
let favLanguage = language || 'javaScript'
if(favLanguage){
    console.log(
        `my favorite programming language is ${favLanguage}`
    )
}else if(favLanguage === 'python'){
    console.log(
        `my favorite language is ${favLanguage}`
    )
}else{
    console.log('I have no favorite programming language')
}

/*
    shorthand conditional statements
    using ternary operator

    switch statement provides an alternative 
    syntax that is easier to read and write
*/

let isFrontEnd = true
isFrontEnd ? console.log('frontend software engineer') : console.log('other IT professional')

favLanguage === 'javaScript' ? console.log(`my favorite language is ${favLanguage}`) 
: console.log(`my favorite language is python`)

//switch statement
let itProfessional = 'systems administrator'

//

//program that returns a short fortune based on a question.

//userName variable.
let userName = 'cyberman'
userName ? console.log(`Hello ${userName},`) : console.log('Hello')

//question asked to eightBall
let userQuestion = console.log(`${userName}: is javaScript the best programming language?`)

//random number generator
let randomNumber = Math.floor(Math.random() * 8)

//empty string will change based on condition
let eightBall = ''

//eightBall name
const eightBallName = 'magic eightBall'

//switch statement for readability
switch(randomNumber){
  case 0:
    eightBall = `${eightBallName}: It is certain`;
    break;
  case 1:
    eightBall = `${eightBallName}: It is decidedly`;
    break;
  case 2:
    eightBall = `${eightBallName}: Rely hazy try again`;
    break;
  case 3:
    eightBall = `${eightBallName}: Cannot predict now`;
    break;
  case 4:
    eightBall = `${eightBallName}: Do not count on it`;
    break;
  case 5:
    eightBall = `${eightBallName}: My sources say no`;
    break;
  case 6:
    eightBall = `${eightBallName}: Outlook not so good`;
    break;
  default:
    eightBall = `${eightBallName}: Signs point to yes`
    break;
}

console.log(eightBall)

/*
program that will register runners for the race and give them instructions on race day.
*/
let raceNumber = Math.floor(Math.random() * 1000);

//variable that indicates whether a runner registered early or not.
let earlyReg = true


//assigns random ages from 0 to 100
let runnerAge = Math.floor(Math.random() * 101);

let adultRunner = raceNumber += 1000

let nonAdultRunner = raceNumber -= 1000
/*
Control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true.
*/

// if(runnerAge >= 18 && earlyReg){
//   console.log(`group_1 race participant: #${adultRunner}`)
// }

/*
control flow statement will check age and registration time to determine race time.

For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
*/

if(runnerAge > 18 && earlyReg){
    console.log(`group_1 race participant: #${adultRunner}; race time: 9:30am`)
}
else if(runnerAge > 18 && !earlyReg){
    console.log(`group_2 race participant: #${adultRunner}; race time: 11:00am`)
}

else if(runnerAge < 18 && !earlyReg){
    console.log(`group_3 race participant: #${adultRunner}; race time: 12:30am`)
}

else if(runnerAge < 18 && earlyReg){
    console.log(`group_3 race participant: #${adultRunner}; race time: 12:30am`)
}

// else if(runnerAge === 18 && earlyReg){
//     console.log(`group_4 race participant: #${adultRunner}; race time: 12:30am`)
// }

// else if(runnerAge === 18 && !earlyReg){
//     console.log(`group_4 race participant: #${adultRunner}; race time: 12:30am`)
// }

else{
  console.log('please see the registration desk.')
}

/*
functions;
  js hoisting capabilities allow
  functions to be accessed before they
  are declared.

  functions can be called as many times as
  needed.

  parameters are passed into function
  identifier as input to be used later

  arguments are data stored within
  the parameters and act like values within
  variables.

Default parameters allow parameters 
to have a predetermined value in case there 
is no argument passed into the function or 
if the argument is undefined when called.

*/

//hoisted getReminder() function.

function getReminder(){
  console.log('always study and practice javaScript!!')
}
getReminder()


//function using parameters and arguments
function isDev(name, title){
  console.log(
    name + ' is a ' + title + '!'
  )
}
isDev('aaron', 'react.js frontend web developer')
isDev('cyberman', 'front-end software engineer')

/*
  default parameters; 
  gives default values to parameters
  if no arguments are provided.
*/

function devLangs(a = 'html', b = 'css', c = 'js'){
  console.log(
    'the main web development languages I use are; ' +  a + ', ' + b + ', and ' + c +'.'
    )
}
//can set new arguments, but if left empty use default parameters.
devLangs('hyper text markup language', 'cascading style sheets', 'javaScript')

//return 'keyword'
function totalMonitors(rows, columns){
  return `we need a total of ${rows * columns} computers for all the.`
}
const total = totalMonitors(5, 4)
console.log(total)

/*
  Helper functions;
  functions being called within another function 
  are often referred to as 'helper functions'. 
  Since each function is carrying out a specific task, 
  it makes our code easier to read and debug if necessary.

  finding the difference between two car prices.
*/

function costOfNewCars(modelS, fourByE){
  return modelS - fourByE
}

function getDiff(tesla, jeep){
  const costs = costOfNewCars(tesla, jeep)
  return costs
}
const totalDiff = getDiff(79990, 53505)
console.log(totalDiff)

/*
function expressions;

  Another way to define a function is to use a function expression. 
  To define a function inside an expression, we can use the function keyword. 
  In a function expression, the function name is usually omitted. A function with no name is 
  called an anonymous function. A function expression is often stored in a variable in order to refer to it.
  function expressions cannot be called before they are declared.
*/

const isDeveloper = function(alias, type, language){
  if(type === 'front end web developer'){
    return `${alias} is a ${type} who programs in ${language}`
  }else if(type === 'back end web developer'){
    return `${alias} is a ${type} who programs in ${language}`
  }else if(type === 'systems administrator' || language === 'bash'){
    return `${alias} is a ${type} who writes ${language} scripts`
  }else{
    return `${alias} is not a developer`
  }
}
console.log(isDeveloper('cyberman', 'systems administrator', 'bash'))
console.log(isDeveloper('cyberman', 'front end web developer', 'javaScript'))
console.log(isDeveloper('cyberman', 'back end web developer', 'java'))
console.log(isDeveloper('cyberman', 'network engineer', 'python'))

/*
  ES6 introduced arrow function syntax, 
  a shorter way to write functions by 
  using the special “fat arrow” () => notation.

  It’s important to be familiar with the 
  multiple ways of writing functions 
  because you will come across each of 
  these when reading other JavaScript code.
*/

const arrowMessage = message => console.log(message) 
arrowMessage('this is an es6 arrow function. a shorter way to write functions.')


/*
  rock paper scissors;
*/

//function that checks and stores userInput
const getUserInput = (userInput) =>{
  userInput = userInput.toLowerCase()
  //a.
  // if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
  //   return userInput;
  // }else{
  //   console.log('Error!')
  // }

  //b.
    // if(userInput === 'rock'){
    //   return userInput
    // }else if(userInput === 'paper'){
    //   return userInput
    // }else if(userInput === 'scissors'){
    //   return userInput
    // }else if(userInput === 'bomb'){
    //   return userInput
    // }else{
    //   console.log('Error!')
    // }

    //c.
    switch(true){
      case userInput === 'rock':
        return userInput
      case userInput === 'paper':
        return userInput
      case userInput === 'scissors':
        return userInput
      // case userInput === 'bomb':
      //   return userInput
      default:
        return 'Error!'
    }
}




//function that allows computer to select a random choice out of 3 choices, based on conditions.
const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random() * 3)
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Error!';
      break;
  }
}



//function the determines winner based on weapon choice
const determineWinner =(userChoice, computerChoice)=>{
  //automatic 'tie' if both choices are equal
  if(userChoice === computerChoice){
    return 'tie'
  } 

  //automatic win if userChoice is 'bomb'
  // if(userChoice === 'bomb'){
  //   return 'you win'
  // } 

  //comparing conditions
  if(userChoice === 'rock'){
    //compared to...
    if(computerChoice === 'paper'){
      return 'computer won'
    }else{
      return 'you win'
    }
  }


  if(userChoice === 'paper'){
    //compared to..
    if(computerChoice === 'scissors'){
      return 'computer won'
    }else{
      return 'you win'
    }
  }


    if(userChoice === 'scissors'){
        //compared to..
        if(computerChoice === 'rock'){
          return 'computer won'
      }else{
        return 'you win'
    }
  }
}
  


//function that determines winner based on user and computer's previous choices.
const playGame=()=>{
  const userChoice = getUserInput('rock')
  const computerChoice = getComputerChoice('paper')

  console.log('You threw: ' + userChoice)

  console.log('The computer threw: ' + computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
}
playGame()

/*
  sleep debt calculator
*/

/*
  program calculates how much sleep user gets per 
  day, per week, and how many hours needed to meet ideal sleep hours.
*/
function getSleepHours(day){
  switch(day){
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 6
      break;
    case 'wednesday':
      return 4
      break;
    case 'thursday':
      return 4
      break;
    case 'friday':
      return 10
      break;
    case 'saturday':
      return 4.5
      break
    case 'sunday':
      return 8
      break;
  }
}
//storing a function within a variable to access later.
const sleepThisDay = getSleepHours('wednesday')
console.log(`I get a total of ${sleepThisDay} hours of sleep on wednesdays.`)

//adding up all the hours of sleep per week.
const getActualSleepHours =()=>{
  let sleepPerWeek = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  return sleepPerWeek
}

//storing a function/action within a variable to access later.
const sleepPerWeek = getActualSleepHours()
console.log(
  `I get a total of ${sleepPerWeek} hours of sleep per week.`
)


const getIdealSleepHours =()=>{
  const idealHours = 8 //8 hours per night
  return idealHours * 7 //56 hours per week
}
// console.log(getIdealSleepHour())

//calculating amount of sleep debt by comparing actual sleep and ideal sleep.
const calculateSleepDebt =()=>{
  const actualSleepHours = getActualSleepHours()

  const idealSleepHours = getIdealSleepHours()

  if(actualSleepHours === idealSleepHours){
    console.log('user got the perfect amount of sleep.')
  }else if(actualSleepHours > idealSleepHours){
    console.log('user got more sleep than needed.')
  }else{
    console.log('user should get more sleep.')
  }

  if(actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than needed this week. Get some rest.')
  }
}
calculateSleepDebt()

/*  
  scope;
  While some variables can be 
  accessed from anywhere within 
  a program, other variables 
  may only be available in a specific context.

  watch for scope pollution
  and accidental reassigning
  variables.

  
*/

function howOld(age, year) {
  let currentDate = new Date();
  let theCurrentYear = currentDate.getFullYear();

  const yearDifference = year - theCurrentYear;
  const newAge = age + yearDifference;

  if (newAge < 0) {
    return `The year ${year} was ${Math.abs(newAge)} years before you were born`;
  } else if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < age) {
    return `You were ${newAge} in the year ${year}`;
  } else {
    return `Input future or past year `;
  }
}

console.log(howOld(30, 2030));


/*
  js arrays are a an ordered way
  to store and data type (numbers, strings, 
  booleans, arrays-objects).
*/
//accessing an element in an array
const languageArray = ['javascript', 'jsx', 'python']
console.log(languageArray[1])

//storing an array element within another variable.
const automationLang = languageArray[2]
console.log(automationLang)

//reassigning an element in an array
languageArray[1] = 'python'
languageArray[2] = 'kotlin'
console.log(languageArray)

/*
    arrays with let and
    const; arrays using 
    'let' can be reassigned
    and elements are mutable
    arrays using 'const' cannot be
    reassigned, but elements 
    are mutable.
*/

let development = [
  'front end development',
  'back end development',
  'automation'
]

//reassigning an array to single element.
development = [
  'front end web development'
]
console.log(development)

//mutating elements in an array
const newDevelopment = [
  'front end development',
  'back end development',
  'full stack development'
]
newDevelopment[0] = 'front end engineer'
newDevelopment[1] = 'back end engineer'
newDevelopment[2] = 'full stack engineer'

//logging out new array/elements.
console.log(
  newDevelopment
)

//single function.
const calcAverageHoursOfSleepPerDay = () =>{
  //we want to return the final sum of all numbers after all numbers have been added/iterated over.
  let sum = 0;
  let sleepADayArr = [8, 6, 4, 4, 10, 4.5, 8]
  for(let i = 0; i < sleepADayArr.length;i++){
    sum += sleepADayArr[i]
  }
  const total = Math.round(sum/sleepADayArr.length)
  console.log(`I get an average total of ${total} hours of sleep per day.`)
}
calcAverageHoursOfSleepPerDay()

/*
  array methods;
  .push(); adds elements to the end of an array.
  .pop(); 
  .shift()
  .unshift()
*/

let langsArray = [
  'html',
  'css',
  'javaScript',
  'jsx',
  'python'
]
//.push()
langsArray.push('bash', 'kotlin')
console.log(langsArray)

//.pop(); removes/returns the last element of an array.
const androidDev = langsArray.pop()
console.log(`${androidDev} is used for android development.`)

//.shift(); removing an element fro the beginning of an array.
var markUp = langsArray.shift()
console.log(`${markUp} is a foundational building block of web development.`)

//.unshift(); adding an element to the beginning of the array
langsArray.unshift('html', 'xml')
console.log(`${langsArray[0]} and ${langsArray[1]} are both crucial skills to know for web development.`)

//.indexOf(); finds the index value of an array element.
console.log(langsArray.indexOf('javaScript'))
console.log(langsArray)

//.slice(); returns a section of an array.
console.log(
  langsArray.slice(2)
)

console.log(
  langsArray.slice(3,6)
)



//passing an array to a function and performing actions on the array.
let programmingArray = [
'front-end web development', 
'back-end web development', 
'full-stack software engineer'
]
function addToEngineeringSkills(){
  programmingArray.push('systems administration')
}

addToEngineeringSkills(programmingArray)
console.log(programmingArray)

/*
  Nested Arrays;
  arrays containing other arrays.
*/
var nestedArray = [
  ['zero']
  ['one','two'],
  ['three','four'],
  ['five','six']
]
//accessing array elements within an array.
const targetNumbers = nestedArray[2][1]
console.log(targetNumbers)

//.splice(); mutating an an array by replacing elements.
langsArray.splice(
  7,
  2, 
  'front-end web development', 
  'android development'
)


console.log(
  langsArray
)

/*
  loops; iterate over data in a row
  using an iterator variable, stopping condition 
  and an iteration statement.
*/

//looping through numbers not up until an end number
for(let i = 5; i < 11; i++){
  console.log(i)
}

//looping through numbers including an end number
for(let i = 5; i <= 11; i++){
  console.log(i)
}

//looping over numbers in reverse
for(let i = 11; 5 <= i; i--){
  console.log(i)
}

//looping over arrays.
let desiredLangs = [
  'html',
  'css',
  'js',
  'jsx',
  'python',
  'bash',
  'kotlin',
  'full-stack development'

]

for(let i = 0; i < desiredLangs.length; i++){
  console.log(
    `I will master ${desiredLangs[i]} software engineering!`
  )
}


// Write your code below
let bobsFollowers = [
  'aaron',
  'angelica',
  'avrie',
  'amari'
]
let tinasFollowers = [
  'aaron',
  'avrie',
  'brad'
]

let mutualFollowers = []

  for(let i = 0; i < bobsFollowers.length;i++){
    for(let j = 0; j < tinasFollowers.length;j++){
      if(bobsFollowers[i] === tinasFollowers[j]){
        mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log(mutualFollowers)



//while loop; iterate as long as a condition is true.
let count = 0;
while(count < 10){
  count++
  console.log(count)
}

//do...while loop; run code at least once, even when condition is false.
do{
  console.log('hello')
  //break statement goes here.
}while(false){
  console.log('world')
}

let newArrayObj = [5, 10, 15, 20]
do{
  newArrayObj.push(25)
}while(newArrayObj.length < 4){
  console.log(newArrayObj)
}

/*
  for...of loop; another way to iterate over elements in arrays and strings.
  cannot access every character in a string like array[arrayIndex].
*/
const coderAlias = 'cyberman'
for(alias of coderAlias){
  console.log(alias)
}

const numbs = [1, 2, 3];
 
for (let i = numbs.length - 1; i >= 0; i--) {
  console.log(numbs[i]);
}
 
console.log('Time is up!');

/*
  iterators; 
  A higher-order function is 
  a function that either accepts functions 
  as parameters/arguments, returns a function, or both! 
*/

const fun1 = function(){
}

const funObj = {
  //property is a method
  fun2: function(){
  }
}

/*
  using dot notation to access function names.
  since functions are first class objects.
*/
console.log(
  funObj.fun2.name
)

console.log(
  fun1.name
)

/*
  callback function;
  function that is passed
  into a function as an paramter/argument
  and invoked somewhere within the HOF.
*/

//callback function
const addTwo = (num)=> num + 2

//higher order function
const manageFun = (fun, num)=>{
  let firstNum = fun(num)
  let secondNum = fun(num)
  if(firstNum === secondNum){
    return firstNum//returns 5 + 2
  }else{
    return 'function returned inconsistent results.'
  }
}
console.log(manageFun(addTwo, 5))

/*
  iterators;
  Iterators are methods called on arrays 
  to manipulate elements and return values.
*/

/*
  forEach(()=>{}); 
  .forEach() will execute the 
  same code for each element of an array.

  can use function declaration
  assign function to a variable 
  arrow function with .forEach(()=>{})
*/
var intsArray = [1, 2, 3, 4]
const newVals = intsArray.forEach((int)=>{
  console.log(int * 2)
})
//cloned array created, original array never mutated.
console.log(newVals)
console.log(intsArray)



var skills = [
  'html', 
  'css', 
  'js', 
  'react/jsx', 
  'python scripting', 
  'back end web development', 
  'linux systems administration',
  'computer hardware technology'
]
var desiredSkills = function(skill){
  console.log(
    `I want to master ${skill}.`
  )
}
//desiredSkills function is passed in as a callback.
const futureSkills = skills.map(desiredSkills)
console.log(futureSkills)

/*
  .map(()=>{}) 
  .map() is called on an array, 
  it takes an argument of a callback 
  function and returns a new array! 
*/

var engineeringSkill = [
  'front end',
  'back end',
  'linux systems',
  'computer hardware'
]

//original array has been cloned, original array is not mutated.
const newEngineeringSkills = engineeringSkill.map((engineering)=>{
  console.log(
    `${engineering} engineering`
  )
})
console.log(newEngineeringSkills)
console.log(engineeringSkill)

function mySkills(skill){
  console.log(
    `I specialize in ${skill} technology`
  )
}
//original array has been cloned, original array has not been modified
const tech = engineeringSkill.map(mySkills)
console.log(tech)
console.log(engineeringSkill)
console.log(skills)

/*
  .filter(()=>{});
  .filter() returns a new array. However, .filter() returns 
  an array of elements after filtering out certain elements 
  from the original array. The callback function for the .filter() 
  method should return true or false depending on the element 
  that is passed to it. The elements that cause the callback 
  function to return true are added to the new array.

  clones the original array, but does not
  mutate it.
*/
var languagesArray = [
  'html',
  'css',
  'js',
  'python'
]
const backEndLang = languageArray.filter((lang)=>{
  return lang === 'python'
})
console.log(backEndLang)//python

/*
  .findIndex(()=>{});
  .findIndex() on an array will return 
  the index of the first element that evaluates 
  to true in the callback function.

  never mutates the original array
*/
const indexOfArray = languagesArray.findIndex((lang)=>{
  return lang[0] === 'p'
})
console.log(languagesArray[indexOfArray])//python





/*
  .reduce(()=>{}, []);
  .reduce() method returns 
  a single value after iterating through 
  the elements of an array, thereby reducing the array. 

  The callback function has two parameters, 
  accumulator and currentValue. 
  The value of accumulator 
  starts off as the value of the first element in the array 
  and the currentValue starts as the second element.
*/

var numbersListArray = [
  3, 2, 1, 0
]
//adds up all elements within an array along with an extra number, if necessary.
const managedNumbs = numbersListArray.reduce((accumulator, current)=>{
  let sum = accumulator + current
  return sum
}, 0)
console.log(managedNumbs)

/*
  .filter(()=>{});
  will filter any elements
  that match a specific condition.

  .every(()=>{});
  return true for every
  element that is true to 
  a condition.
*/
languagesArray = [
  ['html', 'css', 'js'], 'python'
]
console.log(languagesArray)
const frontEndLanguages = languagesArray.every((lang)=>{
  return lang[0][0] = 'h'
})
console.log(frontEndLanguages)

/*
.forEach() is used to execute the same code 
on every element in an array but does not 
change the array and returns undefined.

.map() executes the same code on every element 
in an array and returns a new array with the updated elements.

.filter() checks every element in an array to see 
if it meets certain criteria and returns a new array
 with the elements that return truthy for the criteria.

.findIndex() returns the index of the first element of an array
 which satisfies a condition in the callback function. It 
returns -1 if none of the elements in the array satisfies the condition.

.reduce() iterates through an array and takes the values of the 
elements and returns a single value.

for..of loop; 
iterated over all elements in
an array and performs the same 
code on each iteration.

All iterator methods takes a callback function 
that can be pre-defined, or a function expression, or an arrow function.
*/

//mini linter

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ')

console.log(storyWords.length)



let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];



let betterWords = storyWords.filter((word)=>{
  unnecessaryWords = ['extremely', 'literally', 'actually' ];
  if(!unnecessaryWords.includes(word)){
    return word
  }
})
console.log(betterWords)
console.log(betterWords.length)



// var array = [1, 2, 3]
// function reduceArray(acc, curr){
//   return acc + curr
// }
// console.log(array.reduce(reduceArray))

// let overusedWords = ['really', 'very', 'basically'];

//iterate over betterWords three separate times, once for each of the words in the overusedWords array.
let reallyCount = 0
let veryCount = 0
let basicallyCount = 0

for(word of storyWords){
  if(word === 'really'){
    reallyCount += 1
  }else if(word === 'very'){
    veryCount += 1
  }else if(word === 'basically'){
    basicallyCount += 1
  }
}
console.log(`really count: ${reallyCount}`)
console.log(`very count: ${veryCount}`)
console.log(`basically count: ${basicallyCount}`)

let sumOfOverUsed = reallyCount + veryCount + basicallyCount

let sentences = 0;

const totalSentences = betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences += 1;
  }
});
console.log(sentences)

/*
log these values;

The word count
The sentence count
The number of times each overused word appears
*/

function logAllVals(storyWordCount, sentenceCount, overusedTotal){
  console.log(
    `There are a total of ${storyWordCount.length} in the story. With a total of ${sentenceCount} sentences all together. The number of times "really", "very" and "basically" were used was: ${overusedTotal}.`
  )
}
logAllVals(storyWords, sentences, sumOfOverUsed)

/*object literals*/
let spaceShip = {
  'fuel type':'turbo fuel',
  color:'metallic blue'
}

var shipFuel = spaceShip['fuel type']
console.log(shipFuel)

var shipColor = spaceShip.color
console.log(shipColor)

let devObject = {
  alias:'cyberman',
  'development language':'javaScript',
  'engineer type':'front end software engineering'
}

var engineeringSpec = devObject['engineer type']
console.log(engineeringSpec)

var powerfulLanguage = 'development language'
console.log(devObject[powerfulLanguage])

/*
  mutating, adding and deleting object properties
  can use bracket notation to create 
  string properties and dot notation
  to create new key-value pairs.

  use bracket notation to access
  variables that contain object 
  properties.

  use delete keyword to 
  delete object properties.
*/

//object starts off empty
const emptyObject = {}
//creating, mutating and deleting properties.
emptyObject.string = 'string data added'
emptyObject.number = 1
emptyObject.boolean = true
emptyObject.array = []
console.log(emptyObject)
var firstNumber = 2
emptyObject.array.push(firstNumber)
console.log(emptyObject)
emptyObject['object type']
emptyObject['object type'] = 'non empty'
console.log(emptyObject)
emptyObject['object type'] = 'non empty object'
console.log(emptyObject)
delete emptyObject.string
console.log(emptyObject)
emptyObject.nestedObj = {'string':'nested string added to nested object...'}
console.log(emptyObject)
emptyObject.nestedObj = {'string':'nested string added to nested object...', num0:2, num1:3}
console.log(emptyObject)
emptyObject['newString'] = 'this is a new string'
console.log(emptyObject)

/*
  object methods;
  properties that are 
  built in object functions
  that allow an object to 
  run some block of code
*/

let developmentTool = {
  activateDevTool: function(tool){
    console.log(`Activate development tool; ${tool}!`)
  }
}
//object method/function takes a parameter, and an argument to pass data.
developmentTool.activateDevTool('react.js')

/*
  pass object into functions
  by reference
*/
const skillsObj = {
  skill0:'front end software engineering',
  skill1:'systems administration',
  skill2:'IT support'
}

function manageSkillFun(object){
  object.skill3 = 'full stack software engineering'
}
manageSkillFun(skillsObj)
console.log(skillsObj)

/*
  for...in loop;
  loops through an objects
  properties and allows access
  through code block
*/

for(let prop in skillsObj){
  console.log(
    `aaron bevans is mastering ${skillsObj[prop]}.`
  )
}

const skillsInDepth = {
  skillData:{
    frontEnd: {
      skill:'react.js'
    },
    systAdmin:{
      skill:'linux'
    },
    iTSupport:{
      skill:'hardware'
    },
    fullStack:{
      skill:'front end & back end web development'
    }
  }
}

for(let skills in skillsInDepth.skillData){
  console.log(`${skillsInDepth.skillData[skills].skill}`)
}

/*
  advanced objects;
  this.keyword,
  factory functions,
  destructuring.

  * do not use arrow function syntax when creating
  a method and trying to access a local objects properties
*/

const robotObj = {
  model:'t.a-1000',
  internalProcessor:'e-159001t',
  returnInfo(){
    console.log(
      `I am model number: ${this.model}. I have a built in ${this.internalProcessor} internal processor with face and voice recognition technology.`
    )
  }
}
robotObj.returnInfo()

/*
  object privacy;
  privacy in objects, 
  we define it as the idea that only 
  certain properties should be mutable 
  or able to change in value.
  
  object private properties;
  prepend _ to beginning of property
  _privateProp:'private', to let other 
  developer know not to modify the prop.

*/
let customObject = {
  //private property should not be mutated/altered.
  _privateProp:'error 404; "privacy compromised".',
  technologySpec:'user interface development',
  customMethod(){
    console.log(
      `I specialize in ${this.technologySpec}, and try to avoid ${this._privateProp}.`
    )
  }
}
customObject.customMethod()

//getter method; returns property; 
//can use conditional statement.
const customObject1 = {
  _property:'front end software engineer',
  get methodProp(){
   return typeof this._property === 'string' ? 'getter method functional'
   : 'getter method non-functional'
  }
}
console.log(customObject1.methodProp)


//setter method; sets property;
//can use conditional statement.
//keeping properties private.
//can still mutate properties on getters and setters.
const customObject2 = {
  _engineering:'front end software engineer',
  _technologies: ['html', 'css', 'javaScript', 'react.js'],
  set methodProp(eng){
    if(typeof eng === 'string' && eng === 'front end software engineer'){
      this._engineering = eng
      console.log(this._engineering)
    }else{
      console.log(`error; software engineering type undefined.`)
    }
  }
}
customObject2.methodProp = 'back end software engineer'
console.log(customObject2.methodProp)
customObject2.methodProp = 'front end software engineer'
console.log(customObject2.methodProp)
customObject2.methodProp = 0
console.log(customObject2.methodProp)

/*
  factory functions;

  A factory function 
  is a function that returns 
  an object and can be reused 
  to make multiple object instances. 
  Factory functions can also have 
  parameters allowing us to customize 
  the object that gets returned.
*/

function devFactoryFun(language, type){
  return {
    language:language,
    type:type,
    devMessage(){
      console.log(`I am a ${this.type} and I develop with ${this.language}`)
    }
  }
}
const devFun = devFactoryFun('javaScript', 'front end software engineer')
devFun.devMessage()

/*
  property value shorthand;

  creates objects props without 
  having to write many key value pairs.
  store function and arguments 
  within variable then use dot notation
  to access property.
*/
function objPropFactory(prop1, prop2){
  return {
    prop1,
    prop2
  }
}
const factoryProp = objPropFactory('front end developer', 'javaScript')
console.log(factoryProp.prop1)
console.log(factoryProp.prop2)


/*
  destructured assignments
*/
const customObj3 = {
  propA:'front end',
  propsB:'back end',
  propC:'full stack',
  propD:{
    propMethod(){
      console.log('react.js software engineering')
    }
  }
}

const {propA} = customObj3
console.log(propA)

const {propD} = customObj3
propD.propMethod()


//destructured assignments
function factoryFun(devAlias, devLang){
  return {
    devAlias,
    devLang
  }
}
const fun = factoryFun('cyberman', 'javaScript')
console.log(fun.devAlias)
console.log(fun.devLang)

//setting a new obj property with dot notation.
fun.devType = 'front end software engineer'
console.log(fun.devType)

const {devAlias} = fun
console.log(devAlias)

const {devLang} = fun
console.log(devLang)

const {devType} = fun
console.log(devType)

/*
  built in object methods;

  Object.keys(object);
  The Object.keys() method returns an array of a given object's 
  own enumerable property names, iterated in the same order that a normal loop would.


  Object.entries(object);

  The Object.entries() method returns an array of a given object's 
  own enumerable string-keyed property [key, value] pairs (for..in loop).

  Object.assign();

  takes two arguments(target, source)
  The target object — what to apply the sources’ properties to, which is returned after it is modified.

  The source object(s) — objects containing the properties you want to apply.

  Properties in the target object are overwritten by properties in the 
  sources if they have the same key. Later sources' properties overwrite earlier ones
*/
const devObj = {
  devLib:'react.js',
  devAlias:'cyberman',
  devLang:'javaScript',
  devType: 'front end software engineer'
}
const keys = Object.keys(devObj)
//props paced within an array.
console.log(keys)

const entries = Object.entries(devObj)

for(const [key, value ] of entries){
  console.log(`${key}: ${value}`)
}

//factory function
function factoryFun1(skill0, skill1){
  return{
    skill0,
    skill1
  }
}
const skillVals = factoryFun1('front end software engineering', 'systems administration')
console.log(skillVals.skill0)
console.log(skillVals.skill1)

//object destructuring.
const {skill0} = skillVals
console.log(skill0)

const {skill1} = skillVals
console.log(skill1)

//Object.assign(); re-assigns a new objects data to a previous/target objects data.
const objA = {
  langA: 'html',
  langB: 'css'
}

const objB = {
  langA: 'python',
  langB: 'bash',
  langB: 'automation scripting'
}

const newTarget = Object.assign(objA, objB)

console.log(objA)

console.log(newTarget)









































