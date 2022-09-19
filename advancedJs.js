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

class Student{
    static count=0;  //static variable to call
    constructor(name,age,ph_no,marks){
        this.name=name;
        this.age=age;
        this.ph_no=ph_no;
        this.marks=marks;
        Student.countStudent();
   }
   static countStudent(){
    return(Student.count++);     //this is how u access static variable
   }
   eligibleForCollege(){
    if(this.marks >=40){
        console.log(`${this.name} age ${this.age} is eligible for college`);
    }
    else if(this.marks<40){
        console.log(`${this.name} age ${this.age} is not eligible for college`);
    }
   }
   eligibleForPlacements=(minAge,minMarks)=>{
    if(this.marks>=minMarks && this.age>=minAge){
        console.log(`${this.name} is eligible for placements`);
    }
    else{
        console.log(`${this.name} is not eligible for placements`);
    }
    }
}

const studentOne=new Student('Kohli',18,1234,34);
const studentTwo=new Student('Dhoni',15,2345,35);
const studentThree=new Student('Tej',16,4567,60);
const studentFour=new Student('Rohit',17,7891,70);
const studentFive=new Student('Sachin',19,3456,80);
console.log(Student.countStudent());
studentOne.eligibleForCollege();
studentTwo.eligibleForCollege();
studentThree.eligibleForCollege();
studentFour.eligibleForCollege();
studentFive.eligibleForCollege();


// Fat Arrow Function
" use strict " ;
var getA = function(a){
   return a ;
} ;
let getA = a => a;
console.log(getA(1)); 

let square = a => a*a ;
console.log(square(5));

var a=4;
let squareWay = () => {return a*a };
console.log(squareWay());

let multi = (a,b) => {return a*b};
console.log(multi(2,4));

var z= function(){
  this.val = 1 ;
  setTimeout(() => {
    this.val ++ ;
    console.log ( this.val )
  },1)
};

var xx=new z();

var x = function(){
    console.log (arguments[0])
};
x(1,2,3) ;

var x = (...y) =>{
    console.log (y[0])
};
x(1,2,3);
