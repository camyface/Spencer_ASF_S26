let square = function(num) {
    return num * num
}
console.log(square(6))

let squareFat = (num) => {
    return num * num
}

console.log(squareFat(5))

let squareFatter = num => num*num

console.log(squareFatter(8))

let canYouDrink = (age) => {
    return age > 20 ? "Congrats" : "You cant drink"
}