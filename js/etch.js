function generateGrid(rowcol) {

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
        //box.addEventListener('mouseleave', (e) => {
        //    box.style.backgroundColor = 'white';
        //});
    });
}

function chooseSize() {
    var size = prompt("How many squares on each side?", "64");
    if (size > 0) {
        const prevboxes = document.querySelectorAll('.grid-box');
        prevboxes.forEach((prevBox) => {
            prevBox.parentElement.removeChild(prevBox);
        });
        generateGrid(size);
    }
    else {
        alert("That is not a positive integer!");
        return;
    }
}

let defaultGrid = 64;
generateGrid(defaultGrid);
