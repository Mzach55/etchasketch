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

function placeColor (eventone) {
    console.log(eventone)
    if (pen){
        eventone.target.style.background=`${changecolor.value}`
    }

    draw.forEach(draw => draw.addEventListener('mouseover', function(e){
    if(e.buttons == 1 || e.buttons == 3){
        console.log(e)
        e.target.style.background=`${changecolor.value}`;
        if (pen == false){
            e.target.style.background='white';
        }
    } 
}));
}

function singleColor (e){
    if (pen == false) {
        e.target.style.background='white'
    } else {
        e.target.style.background=`${changecolor.value}`
    }
}


let pen = true;
const draw = document.querySelectorAll('.gridbox')
draw.forEach(draw => draw.addEventListener('click', singleColor));
draw.forEach(draw => draw.addEventListener('mousedown', placeColor));

function dragstart (event) {
    event.preventDefault()
}

draw.forEach(draw => draw.addEventListener('mousedown', dragstart))


const changecolor = document.querySelector('#colorPicker');

