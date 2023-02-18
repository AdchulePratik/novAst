//for of loop---Array Iteration

let cars = ['i10','i20','BMW','Rollceroice','Merceedez'];
let carsNew = [];

for(var item of cars){
    carsNew.push(item)
    //console.log(item);
}
console.log(carsNew);
console.log(item); //let name ='Pratik'   
 
//for in obj---Array Iteration

let student ={
    name :'Pratik',
    Age : 25,
    city : 'Akola',
    car : 'BMW'
}
console.log(student.car); 
for(let i in student){
    //console.log(objkey);
    //if (objkey == 'car'){
    //let car = student[objkey]   
    //console.log(car);
   //}
   console.log(student[i]);
}

let nobr = 1000;

while(nobr > 8){
    nobr --; //if are not giving inc or dcr then compiler will go in infinite loop
    console.log(nobr);
}

let a =100;
do{
    a+++
    console.log(a);
}
while(a < 15)