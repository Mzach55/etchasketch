for (let index = 0; index < 256; index++) {
    const container = document.querySelector('.gridcontainer');
    const gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');
    // gridbox.textContent = `${[index]}`;
    container.appendChild(gridbox);
    
};

// this will clear the board!

function wipeSketch (e) {
    const wipe = document.querySelectorAll('.gridbox');
    wipe.forEach(wipe => wipe.setAttribute('style', 'background: white;'));
}


const eraser = document.querySelector('.wipe');
eraser.addEventListener('click', wipeSketch);

// this targets eraser and sets pen to false!

const removal = document.querySelector('.removal')
removal.addEventListener('click', () => {
    pen = false
})

// this targets the color mode button and sets pen to true!

const drawing = document.querySelector('.draw')
drawing.addEventListener('click', () => {
    pen = true
});


// allows the placing of color depending on if pen is true or false!

function placeColor (e) {
    console.log(e)
    e.target.style.background='black';

    if (pen == false) {
        e.target.style.background='white';
    }
}


let pen = true;

// selects all gridboxes
const draw = document.querySelectorAll('.gridbox')
draw.forEach(draw => draw.addEventListener('mouseover', placeColor));

// draw.forEach(draw => draw.addEventListener('click', placeColor));



