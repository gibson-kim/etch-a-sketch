let rowcol = 16;
let autostring = '';
for (var i = 0; i < rowcol - 1; i++) {
    autostring+='auto ';
}
autostring+= 'auto';

console.log(autostring);
const container = document.querySelector('.grid-container');

container.style.gridTemplateRows = autostring;
container.style.gridTemplateColumns = autostring;

for (i = 0; i < rowcol; i++) {
    for (var j = 0; j < rowcol; j++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.id = `box${i}-${j}`;
        //gridBox.textContent = `${i}-${j}`;
        container.appendChild(gridBox);
    }
}

const boxes = document.querySelectorAll('.grid-box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
        box.style.backgroundColor = 'blue';
    });
    box.addEventListener('mouseleave', (e) => {
        box.style.backgroundColor = 'white';
    });

});