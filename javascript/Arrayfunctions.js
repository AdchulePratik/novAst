//for each (para,index,array) loop

let numbr = [10,20,30,40,50,60];
let numbr2 =[]
numbr.forEach(ele =>{
    numbr2.push(ele);
} )
console.log(numbr2);

function test(){
    let result = 20+50;
    return result;
    //let a=30 ;unreachable code block;

}
console.log(test());

function add(a,b){
    return a+b;
}
console.log(add(40,80));

var add1 = (a,b)=>{
    return a+b;
}
var add3 =()=>{
    return 30+60;
}
console.log(add3());

var add2 = (a,b)=>a+b;
console.log(add2(50,100));

var emp =[
    {name :'Kanchan',age :22 ,sal:30000},
    { name :'Pratik',age :25 ,sal:50000},
    { name :'pillu',age :20 ,sal:25000},
    { name :'shonu', age :18 ,sal:20000},      
]

var age = emp.filter(ele =>{
    return ele.age >=18
})
console.log('age',age);

