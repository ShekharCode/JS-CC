const students = ["Piyush", "John", "Jane"];
const numbers = [2, 5, 8];

//General Case
function print(n) {
  console.log(n);
}

//for each
students.forEach(print);
students.forEach((value, index) => {
  console.log(value, index);
});

// foreach -> it does not return anything -> we cannot manipulate the values in the array i.e, only for printing purposes
let newArr = [];

newArr = numbers.forEach((num) => num * 2);
console.log(newArr); //undefined

//map
function triple(n) {
  return n * 3;
}

//doubling
newArr = numbers.map((val) => val * 2);
console.log("Doubling");
console.log(newArr);

//Tripling
newArr = numbers.map(triple);
console.log("Tripling");
console.log(newArr);

//filter
let ans = numbers.find((num) => num === 2);
console.log(ans);

//findIndex
ans = numbers.findIndex((num) => num === 5);
console.log(ans);

//includes
ans = numbers.includes(4);
console.log(ans);

//filter
ans = numbers.filter((num) => num % 2);
console.log(ans);

//slice
ans = numbers.slice(1, 3);
console.log(ans);

//splice
ans = numbers.splice(0, 1);
console.log(ans);
