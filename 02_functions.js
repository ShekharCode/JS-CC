//functions - > a block of code that performs a particular task

function sayHello() {
  console.log("hey raja");
}

sayHello();

//parameterized function
function add(a, b) {
  console.log(a + b);
}
add(10, 20);

//returning the function
function mul(a, b) {
  let ans = a * b;
  return ans;
}

let res = mul(9, 10);
console.log(res);

//Unlimited Arguments accept
function addsum() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i];
  }
  return ans;
}

console.log(addsum(10, 20, 30, 40, 50));

//Spread Operator

function addsumV2(...numbers) {
  let ans = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    ans += numbers[i];
  }
  return ans;
}

console.log(addsumV2(10, 20, 30, 40, 50));
