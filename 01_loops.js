// for loop - if we know how many times to iterate

for (let i = 0; i <= 10; i = i + 2) {
  console.log("Raja" + i);
}

// while() -> if we know condition and don't know how many times to iterate

let cur_pos = 0;
let home = 5;
while (cur_pos != home) {
  cur_pos += 1;
  console.log("Step Taken ", cur_pos);
}

// do - while() -> executes the code atleast once
cur_pos = 5;
home = 5;
do {
  cur_pos += 1;
  console.log("Step Taken ", cur_pos);
} while (cur_pos <= home);

// Guess the number

let number = Math.floor(Math.random() * 10);
let guess;
let tries = 0;

do {
  guess = parseInt(prompt("Guess a number between 0 to 9"));
  if (guess == number) {
    console.log("You won in ", tries, " tries");
    break;
  }
  tries++;
} while (guess != number);
