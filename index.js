let grid= document.createElement('div');
grid.setAttribute('id', 'grid');
grid.style.display= 'grid';
grid.style.borderWidth= '3px';
grid.style.borderColor='black';
grid.style.borderStyle='solid';
grid.style.width= '800px'
grid.style.height='800px'
grid.style.gridTemplateColumns= 'repeat(16, 1fr)';
grid.style.gridTemplateRows= 'repeat(16, 1fr)';

let divArray=[];
let div;

for (let i=0; i<256; i++) {
    div= document.createElement('div');
    div.setAttribute('class', 'divs')
    div.style.borderWidth= '1px';
    div.style.borderColor='black';
    div.style.borderStyle='solid';
    divArray.push(div);
    grid.appendChild(div)
}

let body= document.querySelector('body');
body.appendChild(grid);



divArray.forEach(i => i.addEventListener('mouseenter',
 function (e) {
    i.style.backgroundColor= random_rgba();
}
));

let button= document.createElement('button');
body.appendChild(button);
button.textContent= 'NEW GRID';


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


button.addEventListener('click', function(e) {
    removeAllChildNodes(grid);
    divArray= [];
    let num= prompt('How many squares?(max 100)', '');
    if (num > 100 || num < 0 || isNaN(num)) {
       return alert('Please enter a valid input')
    }

    let squares= num * num;
    grid.style.gridTemplateColumns= 'repeat(' + num + ',1fr)'
    grid.style.gridTemplateRows= 'repeat(' + num + ',1fr)'
   
    for (let i=0; i<squares; i++) {
        div= document.createElement('div');
        div.setAttribute('class', 'divs')
        div.style.borderWidth= '1px';
        div.style.borderColor='black';
        div.style.borderStyle='solid';
        divArray.push(div);
        grid.appendChild(div)
    }

    divArray.forEach(i => i.addEventListener('mouseenter',
 function (e) {
    i.style.backgroundColor= random_rgba();
}
));
})










