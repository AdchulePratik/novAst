var text ='P r a tik Adc hule'
console.log(text.length);
console.log(text);

var CarNames = 'Audi , Swift , Hundayi , Scorpio , Merceedz';
let res = CarNames.slice(6,3);
console.log(res);

let CarNames2 = CarNames.replace(/Audi/,'Duster');
console.log(CarNames2);

let car = CarNames.slice(-5,-2)
console.log(CarNames.substring(-1,5));//internally negative value will consider as 0

let text1 = "Hello Pratik"
let result = text1.substr(1,4);
console.log(result);

let LastName = 'Adchule';
console.log(LastName.toUpperCase());

let copyword = LastName.toLowerCase();
console.log(LastName.toLowerCase());

let FirstName = 'Pratik is living is in Pune is';
let Last_Name = 'Adchule';

let FullName =FirstName + ' ' + Last_Name;
console.log(FullName);

let FullName2 = LastName.concat(FirstName);
console.log(FullName2);

console.log(FirstName.charAt(7));
console.log(FirstName[7]);
console.log(FirstName.indexOf('is'));
console.log(FirstName.lastIndexOf('is'));
console.log(FirstName.search(/is/));

var MyName = 'Pr  at  ik';
MyName = MyName.trim();
console.log(MyName);

var DOB = '2/3/1997';
let DOB1 = DOB.split("/");
console.log(DOB1);