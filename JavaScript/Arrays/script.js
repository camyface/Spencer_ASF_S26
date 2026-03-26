let animals = ["dog", "cat", "mouse"];

animals.push("cat2");
console.log(animals);
let lovedCat = animals.pop();
console.log(animals);
animals.unshift(lovedCat)
console.log(animals)
let rip = animals.shift()

console.log(animals)
let houses = ["doghouse", "scratching post", "birdcage"]


let newArray = [...animals, ...houses]
console.log(newArray)

newArray.forEach(function(data) {
    console.log(data + "s")
})

console.log(newArray)

let colors = ["red", "blue", "yellow"]

let result = colors.map(function (data) {
    return data +"s"
}


)
console.log(result)

for(let i = 0; i < result.length; i++) {
    console.log(result[i])
}

let word = ["cat", "house", "mouse"]
result = word.filter(function(data){
    return data.length > 4
})

console.log(result)