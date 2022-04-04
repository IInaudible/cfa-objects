// create an object fruits with at least 5 fruits that have the name of the fruit as the key and the value being the color of the fruit
// print out each value in that object manually
let fruits = {
    orange: "orange",
    grape: "purple",
    apple: "red",
    lemon: "yellow",
    lime: "green"
}

console.log(fruits["orange"]);
console.log(fruits.orange);

//then print out each value using a for loop
for (let key in fruits) {
    console.log(fruits[key]);
}
//reassign one of the keys in the object to have a different value
fruits.grape = "pink";
// delete one of the properties in the object
delete fruits.lemon;
console.log(fruits)
// write a function that takes in an object and key and returns that value at that key in the object
const func = function(object, key) {
    for (let i in object) {
        if (key === i) {
            return object[key]
        }
    }
}

console.log(func(fruits, "lime"))