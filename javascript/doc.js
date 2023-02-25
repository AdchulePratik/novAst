function changecolor(){
    var element = document.getElementById('demo');
    console.log('element',element);
    element.style.backgroundColor = 'Red';
}

function getlength(){
    let text = 'pratik,adchule';
    var textlength = text.length;
    document.getElementById('demo1').innerHTML = textlength;
}