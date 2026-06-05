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


// //Arithmetic Operators (+,-,*,/,%,**)

// var a = 10;
// var b = "viky";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// // logical operators (&&, ||, !)

// //                  &&    ||    
// // true true      true   true
// // true false     false  true
// // false true     false  true
// // false false    false  false

// var a = true;
// var b = false;

// console.log(a && b);
// console.log(a || b);
// console.log(!a);

// // Relatonal Operators (==,!=, !==, >, <, >=, <=)

// a = 10;
// b = "20";

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);

// // Assignment Operators (=, +=, -=, *=, /=, %=, **=)

// a = 10;
// b = 20;

// a += b; 
// console.log(a);
// a -= b;
// console.log(a);

// //Unary Operators (typeof, delete, void, +, -)

// var a = 10;

// console.log(a++);
// console.log(++a);

// var a = 10;

// console.log(a--);
// console.log(--a);

// a = 1; // 2 3
// b = 1; // 0 1
// c = 0; // 1 2

// //             1     0     1    3     1      1
// var result = a++ + --b + ++c - ++a + ++b + c++
//                //  1    3
//              + b++ + a;
// console.log(result);
//Conditional Statements
//var a = 10;
//var b = 20;
//If condition
//if(true){
    // Template Literals
   // console.log(`${a} + ${b} + ${a+b}`)
//}
//var a;//hoisting
   console.log(a);
   var a = 10;

   var a = 10; //Global Scope
   let b = 20; //Global Scope 
   const c = 30; //Global Scope
   if(true){
      console.log(a);
      // let b = 20; //Block Scope
      const c = 30; //Block Scope
      console.log(b); 
}
console.log(a);
console.log(b);

var a = 10;
if(a%2===0){
   console.log(`${a} is even`);

}
else{
   console.log(`${a} is Odd`);
}

var mark = 30;
//if(mark>=90){
   console.log("A Grade")
//}
//else if(mark >= 35){
   console.log("Pass")
//}
//else{
   console.log("Fail")
// }

//var a = 10;
// var result = condition ? true Statement: False Statement
//var result = a%2===0 ? "Even" : "Odd";
//console.log(result)

//mark = 30;
//var result = (mark>=90) ? "0 Grade"
             //(mark>=75) ? "A Grade"
             //(mark>=35) ? "Pass"
             //"Fail"
//console.log(result);

var day = 2;
switch(day){
   case 1:{
      console.log("Sunday");
      break;
   }
   case 2:{
      console.log("Monday");
      break;
   }
   case 3:{
      console.log("Tuesday");
      break;
   }
}

// Looping Statements

// 1 time 11 times 10 times
for(var i=1;i<=10;i++){
   console.log(i);
}


//var val = 10246;
//var count = 0;
//while(val >= 0){
   //count++;
   //val = Math.floor(val/10);
//}
//console.log(count);

//do{
      console.log("Do.....while")
//}while(false);

//for(let i=1;i<=10;i++){
   //if(i%2===0){
      //continue;
   //}
   //console.log(i);

//}


//function add(a, b){
   ////console.log(10+20);
//}

//add(10,20); // hoisting
 
// Arrow Function
//var demo = () => {
   //console.log(10 + 20);
//
//demo(10,20);
//demo();
//demo(10);

// Spread Operator(...)
var arr = [10,20,30];
var arr2 = [...arr,40,50];
console.log(arr);
console.log(arr2);

//Destructing operator

var [m1,m2,m3,m4,m5] = [90,99,98,97,100]
console.log(m1,m2,m3,m4,m5);

var obj ={
   name:"Rashid"
   mobile:8765432898
   dept:[IT,AIDS]
   email:email.@gmail.com
   isactive: true,
}
console.log(name,mobile,dept,email,isactive)

var arr = [10,20,30,40,50]

for(let i in arr){
   console.log(index)
}
for(let value of arr){
   console.log(value)
}
var obj ={
   name:"Rashid"
   dept:[AIDS]
   mobile:8765432898
}
for(let key in obj){

}

var arr =[1,2,3,4,5]

var result = arr.map(val)=>(val*2)
console.log(result)

var even arr.filter((val)=>val%2===0);
console.log(even)
var sum = arr.reduce((add,val1)=>(add,val),0);
console.log(sum)
var userName = {
   name = "Rashid"
}
var user = {
   ...name,
   password:12345678
}console.log(user);