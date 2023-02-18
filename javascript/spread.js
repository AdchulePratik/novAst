//... spread operator : to copy all or part of an
// Existing Array or object into another array or obj.

let cars = ['i10','i20','renault','Audi','Rollceroice'];

let newcars = [...cars] //[...original_array_name] 
console.log(newcars);

//copy some part of an array :
//let firstitem
//let [firstitem ,seconditem , ...remainingitem] = ['i10','i20','BMW','Audi','Rollceroice'];
let [firstitem ,seconditem , ...remainingitem] =cars;

console.log(firstitem);
console.log(seconditem);
console.log(remainingitem);

let color1 = ['red','white','black','blue','','orange'];
let color2 = ['red','white','black'];
let color3 = [...color2,...color1,'purple','yellow'];
console.log(color3);

let student ={
    name : 'Pratik',
    age :25,
    city :'Akola',
    car : 'Rollceroice'
}

let student2 = {...student};
console.log(student2);

let student3 = {
    name : 'Kanchan',
    age :22,
    city :'Brhmapuri',
    car : 'Audi'
}

let student4 = {
    name : 'Adchule',
    age :25,
    city :'Akola',
    carprice :5000000
}

let student5 = {...student4, ...student3, ...remainingitem};
console.log(student5);