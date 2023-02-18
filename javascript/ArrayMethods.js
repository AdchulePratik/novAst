var arrayitem = [10,20,30,40,50,60,70,80];
console.log(arrayitem.length );

let lastind = arrayitem.length -1;
console.log(lastind);
//console.log(arrayitem.index of('20'));not allowed with array

delete arrayitem[0];
let data = arrayitem[0];
console.log(typeof(data));
console.log(arrayitem);
console.log(arrayitem.toString());

let joinedarray = arrayitem.join(' ');
console.log(joinedarray);
//let propedarray = arrayitem.pop();
//console.log(propedarray);

console.log(arrayitem.pop());
console.log(arrayitem);
delete arrayitem[0];
console.log(arrayitem);
console.log(arrayitem.shift());
console.log(arrayitem);
arrayitem.push('2023',2023)
console.log(arrayitem);

arrayitem.unshift('2023',2023);
console.log(arrayitem);
arrayitem[0] = 500;
console.log('--->',arrayitem);

arrayitem.splice(5,0,10,15)
console.log(arrayitem);

let num1 = [10,200,3000,40000]
let num2 = [20,300,4000,50000]
console.log(num2.concat('num1','num2',2000));
console.log(num2.slice(1));
console.log(num2.reverse(3));

let a = ['Abc','c','aBc','b','B']
console.log(a.sort());
console.log(num2.sort());

