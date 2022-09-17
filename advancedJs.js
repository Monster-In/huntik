// 1.call
// Function.call allows us to set the this value of a function manually. Instead of simply calling a function like fn(), we use fn.call(param), passing in the object we want this to equal as the parameter.
// code:
function logThis() {
    console.log(this);
}

const obj1 = { val: 'Hello!' };

logThis(); // -> Window {frames: Window, postMessage: ƒ, …}
logThis.call(obj1); // -> { val: 'Hello!' };
// One particularly useful application of call is to work with an unknown set of parameters in a function. Let’s say we want to write a function that can take in as many numbers as a user wishes to provide, then add them up.
// Inside every function, JavaScript gives us access to the arguments object. This is an array-like object that contains the arguments passed in to the function, indexed.
// code:
function add() {
    console.log(arguments);
}
add(4); // -> { '0': 4 }
add(4, 5); // -> { '0': 4, '1': 5 }
add(4, 5, 6); // -> { '0': 4, '1': 5, '2': 6 }
// arguments is an object with each of the property keys representing indices.If we want to turn this into a true array, we can use call with Array.slice.
// Array.slice, a pure function that returns a copy of an array if called with no arguments.
// Array.slice internally creates a copy of the original array by referencing this. By calling Array.slice on our arguments object, we are returned a new, true array, created from arguments.
// code:
function add() {
    const args = [].slice.call(arguments);
    console.log(args);
}

add(); // -> [ 4, 5, 6 ]

// 2.Apply
// Function.apply works the same exact way as call, except instead of passing in arguments one by one, we pass in an array of arguments that gets spread into the function.
// code:
function logThisAndArguments(arg1, arg2) {
    console.log(this);
    console.log(arg1);
    console.log(arg2);
}

const obj2 = { val: 'Hello!' };

logThisAndArguments('First arg', 'Second arg');
// -> Window {frames: Window, postMessage: ƒ, …}
// -> First arg
// -> Second arg

logThisAndArguments.apply(obj2, ['First arg', 'Second arg']);
// -> { val: 'Hello!' }
// -> First arg
// -> Second arg

// 3.Bind
// Function.bind works differently than the other two. Similarly to call, it takes in a this value and as many more parameters as we’d like to give it, and it’ll pass those extra parameters to the function being called.
// However, instead of calling the function immediately, bind returns a new function. This new function has the this value and the parameters already set and bound. When it’s invoked, it’ll be invoked with those items already in place.
// code:
function logThisAndArguments(arg1, arg2) {
    console.log(this);
    console.log(arg1);
    console.log(arg2);
}
const obj = { val: 'Hello!' };
const fnBound = logThisAndArguments.bind(obj, 'First arg', 'Second arg');
console.log(fnBound);
// -> [Function: bound logThisAndArguments]
fnBound();
// -> { val: 'Hello!' }
// -> First arg
// -> Second arg

// 4.code
function StudentAge(){
    console.log("Age of the student is"+" "+Object.values(this)); 
}
const student={'age':20};
const k=StudentAge.bind(student);
k();// -> Age of the student is 20



// Currying of functions
// In functional programming, currying is the process of converting a function, that takes multiple arguments at once, to a function that takes these arguments step by step.
// let multiply = function(x, y) {
//     console.log(x + y);
// }

// let multiplyByTwo = multiply.bind (this,2) ;
// multiplyByTwo(2);

// let multiplyByThree = multiply.bind (this,3) ;
// multiplyByThree(5);

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo=multiply(2);
multiplyByTwo(3);