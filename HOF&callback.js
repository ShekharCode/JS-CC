//higher order functions and callback

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
