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















