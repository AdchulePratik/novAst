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

var empdata = emp.filter(element =>{
    return element.age >=22 && element.sal ==30000;
})
console.log('empdata',empdata);

function test(){
    let i =30;
    return ++i;
}

var valueofI = test();
console.log('valueofI',valueofI);

var empname = emp.map(item =>{
    return item.name;
});

var emp_name_age ={name :'',age :''}
emp.map(item =>{
    emp_name_age.name =item.name;
    emp_name_age.age =item.age;    
})
console.log('emp_name_age',emp_name_age);
console.log('empname',empname);

var zeroIndexValue ;
emp.map((item,ind)=>{
    if(ind ==0){
        zeroIndexValue =item ;
    }
})
console.log(zeroIndexValue);
let charts =['A','P','B','C','T','A','B','D','C'] 

var newcars = charts.filter((item,index) => {
    return charts.lastIndexOf(item) === index
})
console.log("charts---",newcars);
var empnew = [
    {name :'pratik',age :25,sal:50000},
    {name :'kanchan',age :22,sal :30000},
    {name :'pratu',age :25,sal:80000},
    {name :'kanchu',age :22,sal:40000}
]

let y = empnew.map(({name,age}) =>({name,age}))
console.log('y',y);
//empnew.map(item =>{
//emp_Name_age.name =item.name;
//emp_Name-age.age =item.age;    
//})
//console.log("emp_Name_age",emp_Name_age)
//console.log("empName---",empName);

var emp_Name_age = Object.keys(empnew).map(item =>{
    console.log(item);
    return empnew[item]
})
console.log('emp_name_age',emp_Name_age);

let a ='i like apple & i live in Pune' //Assignment: remove duplicate words from string

var arr =["Apple","Mango","orange","watermelon","pinaple"];

var arrNew =[...new Set(arr)];
console.log(arrNew);