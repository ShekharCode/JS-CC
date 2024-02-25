//higher order functions and callback
// A higher-order function is a function that takes other functions as arguments or returns a
// function as its result. In JavaScript, functions are treated as first-class citizens,
//  meaning they can be assigned to variables, passed as arguments, and returned from other
//  functions, just like any other data type

// add is called HOF and cb is called as callback
function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

//1.
add(2, 4, function (val) {
  console.log(val);
});

//2.
function showresult(result) {
  console.log(result);
}

add(2, 6, showresult);

//3.
add(8, 9, (val) => console.log(val));

//returning a function from a function

function multiply(a, b, cb) {
  let result = a * b;
  cb(result);

  return () => console.log(result);
}

let resfunc = multiply(21, 2, () => {});
resfunc.call();
