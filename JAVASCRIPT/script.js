// var a = 10; //Reinitialize & Redeclare
// let b = 20; //Reinitialize 
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num = 10;
// var str = "Rashid";
// var undefine;
// var Null = null;
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);
// console.log(typeof boolean);

// var bigInt = 123n
// var symbol = Symbol("li");

// console.log(typeof bigInt);
// console.log(typeof symbol);


// var arr = [10, 20, 30];
// console.log(typeof arr, arr);
// console.log(typeof arr, arr);
// var obj = {
//     name: "Rashid",
//     Dept: "AIDS"
// }
// console.log(typeof obj, obj);


//Arithmetic Operators (+,-,*,/,%,**)

var a = 10;
var b = "viky";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// logical operators (&&, ||, !)

//                  &&    ||    
// true true      true   true
// true false     false  true
// false true     false  true
// false false    false  false

var a = true;
var b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// Relatonal Operators (==,!=, !==, >, <, >=, <=)

a = 10;
b = "20";

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);

// Assignment Operators (=, +=, -=, *=, /=, %=, **=)

a = 10;
b = 20;

a += b; 
console.log(a);
a -= b;
console.log(a);

//Unary Operators (typeof, delete, void, +, -)

var a = 10;

console.log(a++);
console.log(++a);

var a = 10;

console.log(a--);
console.log(--a);

a = 1; // 2 3
b = 1; // 0 1
c = 0; // 1 2

//             1     0     1    3     1      1
var result = a++ + --b + ++c - ++a + ++b + c++
                1    3
             + b++ + a;
console.log(result)