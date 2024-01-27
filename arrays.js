const students = ["Piyush", "John", "Raja", "Sam"];
console.log(students);
console.log(students.length);
students[2] = "Raja Shekhar";
console.log(students);
students.push("Alexa");
console.log(students);

//Arrays in JS are heterogenous in nature
const myarray = ["Raja", 23, "M"];
myarray.push({ Company: "ICICI" });
console.log(myarray);

//indexOf()
console.log(myarray.indexOf("M"));

//pop()
poped_item = myarray.pop();
console.log(myarray);
console.log(poped_item);

//reverse()
students.reverse();
console.log(students);
