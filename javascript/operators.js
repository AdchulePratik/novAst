//Assignment operators:
//+

var x=50;
let y=10

//x=x+y;
//x+=y
//x-=y

y=x-y;
console.log(y);
//postfix/prefix operate
//note:
//variable_name++ : Postfix operator returns the variable value first then got incremented by 1
//++variable_name :Prefix operator got incremented by 1,then returns the variable value

let value1=2;
console.log(value1);
console.log(value1++);// i=i+1/i=0+1
console.log(value1);
console.log(value1++);
console.log(value1);

let value2=3;
console.log(value2);
console.log(++value2);//j=j+1
console.log(value2);

let value3=4
console.log(value3);
console.log(value3--);//value3=value-1
console.log(value3);

let value4=5
console.log(value4);
console.log(--value4);//value4=value-1
console.log(value4);

//logical operators:
// && logical operator and 1 T && r T =T
// || logical operator or
// ! logical operator not

var num1=null;
var num=50;
if (num1 > 80 && num < 80){
    console.log('ANDDD');
}

if (num1 >=80 || num <= 80){
    console.log('ORRR');
}

if (num == 50 && num1 == undefined){
    console.log('!!!!!!!!!!!!!!!111');
}

//= == === difference

var myRank='2' //Assignment operator used to assign value to the variable
var samRank=2

//equality operator
if (myRank == samRank){ //it will compare only value of variables
    console.log('equality operator');
}

if (myRank === samRank){ //it will compare value as well as data type of variable
    console.log('equality operator');
}

if (myRank !==samRank ){
    console.log('!==condition');
}

//ternory? operator:
//condition-->(true)? true:false;
let city='Banglore'
if (city === 'Banglore'){
    console.log('i live in Akola');
}
else
{
    console.log('i live Pune');
}

city === 'Banglore' ? console.log('i live in Akola') : console.log('i live Pune');
