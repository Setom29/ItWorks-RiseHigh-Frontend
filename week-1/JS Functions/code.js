// Exercise 1
// Write a function called isEven that accepts a number as a parameter and checks if the number is even or not. Return true if it is even or false if it is odd. Don’t Google this one ;) Use modulo %

const isEven = function (number) { return number % 2 == 0 }
console.log(isEven(2.2))

// Exercise 2
// Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.

const printOddNumbers = function (arr) {
    for (el of arr) {
        if (!isEven(el)) {
            console.log(el)
        }
    }
}
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// Exercise 3
// Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. The function should return true or false depending on whether the number exists in the array.
// Hint: You should loop through the array, and for each item in the array, check if it equals the number that was passed.
// checkExists([1, 2, 3], 2) - should return true
// checkExists([1, 2, 3], 5) - should return false
const checkExists = function (arr, num) {
    for (el of arr) {
        if (el === num) {
            return true
        }
    }
    return false
}

console.log(checkExists([1, 2, 3], 2))



// Exercise 4
// Create an object called calculator.
// It should have two methods: add and subtract
// Both methods take two parameters, and should return the sum/difference of both numbers.
// Use this to test your code:
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42

const calculator = {
    add: function (a, b) { return a + b },
    subtract: function (a, b) { return a - b }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(result1, result2)
console.log(calculator.add(result1, result2))


// Exercise 5 (Extra Practice)
// Complete the following code:
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
// To complete the above you will need to create both the increaseByNameLength and makeRegal functions.
// You should be able to write the body of both functions in one line; there’s no trick here - it’s just practice.
const increaseByNameLength = function (money, name) { return name.length * money }
const makeRegal = function (name) { return "His Royal Highness, " + name }

const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100)




// Extra

people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]
const capitalize = function (str) { return str[0].toUpperCase() + str.slice(1) }
const getAge = function (age) {
    if (age < 21) {
        return "an underage"
    } else if (age > 55) {
        return "a 55+"
    } else {
        return age + " year old"
    }
}

const getSummary = function (person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += capitalize(person.profession)
    summary += ` from ${capitalize(person.city)}, ${capitalize(person.country)}. `
    summary += capitalize(person.name) + " loves to say " + "\"" + capitalize(person.catchphrase) + "\"."
    return summary
}

for (person of people_info) { console.log(getSummary(person)) }

// 2

const removeChars = function (str) {
    for (char of specialChars) {
        str = str.split(char).join("")
    }
    return str
}
const addWords = function (words) {
    for (let word of words) {
        if (!wordCounts[word]) {
            wordCounts[word] = 1
        } else wordCounts[word] += 1
    }
}

const countWords = function () {
    let words = removeChars(story.toLowerCase()).split(" ")
    addWords(words)
    console.log(wordCounts)
}


const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. " +
    "Ultimately, Shelob the wolf-master put out the fire with her feet. " +
    "But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}
countWords()
