// Create a StringFormatter module. It should have two functions:
// capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
// toSkewerCase - receives a string and replaces any spaces with a dash
function StringFormatter() {
    const capitalizeFirst = str => str[0].toUpperCase() + str.slice(1).toLowerCase();
    const toSkewerCase = str => str.replace(" ", "-")
    return { capitalizeFirst: capitalizeFirst, toSkewerCase: toSkewerCase }
}


const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box


// Create a Bank module. It should have a variable and two functions:
// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money
const Bank = function () {
    let money = 500;
    const deposit = cash => { money += cash }
    const showBalance = () => console.log(money)
    return {
        deposit: deposit,
        showBalance: showBalance
    }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
// The above is not a mistake. The names are purposefully different from the instructions. Understand why?

// Do you ever get tired of going to YouTube for a song, typing the name in, finding the right video, then selecting it? Ugh.
// Let’s make a simple SongsManager. Here is the desired result:
const SongsManager = function () {
    const base = "https://www.youtube.com/watch?v=";
    const songLib = {};
    const addSong = (name, url) => {
        songLib[name] = [url.slice(32)]
    };
    const getSong = name => console.log(base + songLib[name])

    return { addSong: addSong, getSong: getSong }
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax")
 // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
// Effectively, you will be creating a hyper-specific, YouTube Song Manager object.
// Did you notice that each URL starts the same way?
// Inside of SongsManager there should be a songs object, but, instead of saving songs like this:
// const songs = {
//     "sax": "https://www.youtube.com/watch?v=3JZ4pnNtyxQ",
//     "how long": "https://www.youtube.com/watch?v=CwfoyVa980U"
// }
// The addSong function in SongsManager will make sure that we only save the identifiers, like this:
// const songs = {
//     "sax": "3JZ4pnNtyxQ",
//     "how long": "CwfoyVa980U"
// }
// Imagine how much space we’d be saving if we actually had to store this in a database!
// Of course, when we call getSong - it should give us the full URL!
// Go ahead, create SongsManager - it should not be a very long function ~