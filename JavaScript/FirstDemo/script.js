console.log("Hello World")

// browser only method so must be ran through index.html
let answer = prompt("What is your name?")
console.log("What's poppin " + answer)
answer = parseInt(answer)
if(isNaN(answer)) {

}
console.log(answer)
console.log(typeof answer)

let sentence = `I love ${answer}`

// ternary operator
answer > 21 ? "Yeah" : "Boo"
const d = new Date
let hh = d.getHours()
let mm = d.getMinutes()
let ss = d.getSeconds()