//Syntax of arrow functions

/*
const sayhello = () =>{
    console.log("Hi Raja");
}

sayhello();

const add = (a,b) =>{
    return a+b;
}

console.log(add(3,5));

const addV2 = (a,b) => a+b; // one liner function

console.log(addV2(5,8));

*/

// 2. arguments keyword does not work with arrow functions but you can use spread operator

/*
const addNumbes = (...numbers) => {
    let sum = 0;
    for(let i = 0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}

console.log(addNumbes(12,34,5,6,7,57));

*/

// 3.Hoisting -> available in normal function but not in arrow functions
/*
sayhello();
function sayhello(){
    console.log("Hi Raja");
}


const sayhelloV2 = () =>{
    console.log("Hi Raja Shekhar")
}

sayhelloV2();

*/

//this keyword -> normal function bind to that object and arrow bind to window

/*
const obj = {
    value:20,
    myfunction:function() {
        console.log("Value is "+this.value);
    }
}

obj.myfunction()

*/

/*
const obj = {
    value:20,
    myfunction:() => {
        console.log("Value is "+this.value);
    }
}

obj.myfunction();
*/
