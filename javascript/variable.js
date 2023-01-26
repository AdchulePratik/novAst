//  syntax: let/var/const variable_name : value;
//reserved_keywords variable_name : data type
 let b; //declaration

b = 30;  //defination
console.log(b);

let a = 20; //d+d
//let a ='poonam'  //redeclaration with let keyword is not possible
let favFruit = 'mango' ;

console.log(favFruit);

// let x = 40;

// x = 40;// ----- // hoisting of variable  is not possible with let keyword.
// let x;
//console.log(x);// ----not possible
var t; //declaration
t = 50; //defination
var favCar = 'RollceRoice'; //D+D //redeclaration of variable is possible with var keyword 
console.log(favCar);
var favCar = 'Mercedeez';
console.log(favCar);

mobNo = 989999999; // define : hoisting of variable: first define variable's value then declare variable
var mobNo ;  //declare  //  hoisting  possible with var keyword.
console.log(mobNo);

const myName = 'Pratik'; //value reassign with const keyword is not possible
//myName = 5000;
console.log(myName);
//const myName = 'Adchule' //redeclaration of variable is not possible with const keyword
// const g = 50;
//g = 50; //hoisting of variable is not possible with const keyword
//const g;

//function:
//function syntax: function(res keyword)functionNmae(){}

function myFirstFunction() {
    //code block
    console.log('i am inside function');
    }

    myFirstFunction();
    console.log(myFirstFunction());

    function scope(){
    var myFavMovie ='Ved';
    console.log(myFavMovie);
    if (true){
        console.log(myFavMovie);
    }
}

//console.log(myFavMovie);
//program to print the text
//variable a cannot be use here

function greet() {
    let a='hello'

    //variable a cannot be used here
    if (true){
        //variable b cannot be used here
        let b='world'
        console.log(b);
    }

    //variable b cannot be used here
    console.log(b); //error
}

function diffletvar() {
    let a='hello'
    if (true){
        var b='world'
        console.log('inside block b-->',b);
        console.log('favFruit-->',favFruit);
        console.log('a',a);
        b='world2023'
        console.log('outside block b value',b);
    }

    console.log('outside block b-->',b);
    console.log('favFruit-->',favFruit);
    console.log('a',a);
    
}

//var keyword variable's scope is:function level scope
//let keyword variable's scope is:block level scope
//console.log('outside fun',b); //uncaught re error

diffletvar();






    
