// for (statement; condition; increment;)
// //code block
    //break if u want to
// }

let list = ['red','white','black','blue','yellow']
var Newlist = [];
for(let i=0 ; i < list.length ; i++ ){ //5<=5 i++ = i=i+1
    Newlist.push(list[i]); //list[0]
}
console.log('newlist-->',Newlist);

let Newlist2 = [];
for(let i=0 ; i < 3 ; i++){ //5<=5 i++ = i=i+1
    Newlist2.push(list[i]); //list[0]
}
console.log('newlist2--<',Newlist2);

let Newlist1 = [];
for(let i=0 ; i < list.length ; i++ ){ //5<=5 i++ = i=i+1
    Newlist1.push(list[i]);

    if(i==3){
        break; //jumps out from the loop
    }
    console.log('newlist1-->',Newlist1);
}

let Newlist4 = [];
for(let j=1 ; j<10. ; j++){
    Newlist.push(list[j]);
    console.log('newlist4-->',j);
    if(j=='5'){
        break;
    }

}

//let nobr = [1,2,3,4,5,6,7,8,9,10]
//for (let j=0 ; j<=0 ;j++){
//console.log(nobr[j])
//if (j==4){
//    break;
//}

let list1 = ['red','white','black','blue','yellow','orange'];
let Newlist3 = [];
for(i=0 ; i<list.length ; i++){//5<=5 i++ = i=i+1

    if(i==3){
        continue; //jumps into the loop
    }
    Newlist3.push(list[i]);
    console.log('newlist3-->',Newlist3);

}

for(i=0 ; i<list.length ; i++){//5<=5 i++ = i=i+1

    if(list1[i] !='blue'){
        Newlist3.push(list[i]);
        
    }
    
    console.log('newlist3-->',Newlist3);

}