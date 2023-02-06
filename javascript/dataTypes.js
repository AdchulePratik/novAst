let myName = 'Pratik';

//Let myNameList=[] //empty array
let myNameList = ['pratik', 'pooja', 'shonu', 'riya', 'piya', 100, 200, 300, test()];

function test() {

}

console.log('myNameList', myNameList);//array
console.log(myNameList[1]);//pratik
console.log(myNameList[3]);//shonu
console.log(myNameList.length);//9

//let student={}//empty obj

let student = {
    Name: 'Pratik',
    Age: 25,
    class: 15,
    failstatus: true

}

console.log(student);
console.log(student.class);

let employees = [
    {
        Name: 'Pratik',
        Age: 25
    },

    { 
        Name:'Pooja',
        Age:20

    },

    {
        Name:'Shonu',
        Age:22

    },

    {
        Name:'riya',
        Age:24
    }
]
console.log(employees);
console.log(employees[1].Name);

let list=[
    ['ppp','rrr'],
    ['aaa','ttt',['ppp','rrr']],
    ['iii','kkk']
];
console.log(list);
console.log(list[0][1]);
console.log(list[1][2][0]);

var obj={
    "posts":[
        {
            "id":1,
            "title":"jeson-server",
            "author":"typicode"

        }
    ],

    "comments":[
        {
            "id":1,
            "body":"some-comment",
            "post-id":2
        }
    ],

    "profile":{

            "name":"pratik"

    },

    "status":'succsess'
}
console.log(obj.posts[0].author);

//data types in js
//string
//number
//boolean
//object
//null
//undefined

var car=//'true',9.0,90,-0
console.log(typeof(car));
console.log(typeof(20+40+'Pratik'+60));