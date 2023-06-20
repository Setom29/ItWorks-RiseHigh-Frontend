// Exercise 1 - Callbacks
// If you’re tight on time, please make sure to complete exercise 1, 2, 4, 5 before moving to the next lesson. Otherwise take a stab at all of them :)
// Write a function pushPull that takes one argument - a function - and invokes that function:
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}
const pushPull = callback => callback()


pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"
// -----------------------------------------------------------------------------------------------------
// Exercise 2 - Callbacks
// You can get the current date/time in Javascript by writing: const time = new Date().
// Create a function called getTime that takes one parameter - a function - then calls it with an argument.
const returnTime = function (time) {
  alert('The current time is: ' + time)
}
const getTime = callback => {
    const time = new Date()
    callback(time)
}
getTime(returnTime)
// Note that returnTime receives a parameter! So when we call it from getTime, make sure to pass the argument.
// -----------------------------------------------------------------------------------------------------

// Exercise 3 - Callbacks
// Given the following code, what error do you get? Write the missing part to make the code work:
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(alert, console.log, "I like to party")
// Note: do not change any of the code above. You only need to add something to make this work. Remember, alert is a built-in function in JS.
// -----------------------------------------------------------------------------------------------------

// Exercise 4 - Arrow Functions
// Create an arrow function that receives three parameters and returns their sum - it should be one line.
const sumValues = (a, b, c) => a + b + c
console.log(sumValues(1, 2, 3))
// -----------------------------------------------------------------------------------------------------

// Exercise 5 - Arrow Functions
// Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:
const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase()

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia
// It can be one line ;)
// -----------------------------------------------------------------------------------------------------

// Exercise 6 - Arrow functions
// Given the following:
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
const commentOnWeather = temp => "It’s " + determineWeather(temp)
// // Create a one-line arrow function called commentOnWeather that takes one parameter, temp. It should call determineWeather and return the concatenation of "It’s " and determineWeather’s output:
console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"
// -----------------------------------------------------------------------------------------------------
// Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc()
  soundFunc(sound)
}
    
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
    
const makeSound = sound => alert(sound)
    
explode(shineLight, makeSound, "BOOM")
// Study the code in the image above, think about what you expect to happen, and then complete the HTML to make the code work.
