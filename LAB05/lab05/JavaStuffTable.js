function changeSize200px(){
    var tds = document.getElementsByTagName('td');

    for (var i = 0;i < tds.length;i++)
        tds[i].style.width = '200px';
}
function changeSize500px(){
    var tds = document.getElementsByTagName('td');

    for (var i = 0;i < tds.length;i++)
        tds[i].style.width = '500px';
}


function changeBorder1px(){
    var ths = document.getElementsByTagName('th');

    for (var i = 0;i < ths.length;i++)
        ths[i].style.border = '1px solid black';
}

function changeBorder10px(){
    var ths = document.getElementsByTagName('th');

    for (var i = 0;i < ths.length;i++)
        ths[i].style.border = '10px solid black';
}

function changeBorder20px(){
    var ths = document.getElementsByTagName('th');

    for (var i = 0;i < ths.length;i++)
        ths[i].style.border = '20px solid black';
}

function changeColorBlue(){
    var ths = document.getElementsByTagName('td');

    for (var i = 0;i < ths.length;i++)
        ths[i].style.backgroundColor = 'Blue';
}

function changeColorRed(){
    var ths = document.getElementsByTagName('td');

    for (var i = 0;i < ths.length;i++)
        ths[i].style.backgroundColor = 'red';
}

function reset(){
    var tds = document.getElementsByTagName('td');

    for (var i = 0;i < tds.length;i++)
        tds[i].style.width = '10px';

    var ths = document.getElementsByTagName('th');

    for (var i = 0;i < ths.length;i++)
        ths[i].style.border = '1px solid black';
    var ths = document.getElementsByTagName('td');

    for (var i = 0;i < ths.length;i++)
        ths[i].style.backgroundColor = 'lightgray';
}